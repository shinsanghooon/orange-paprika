'use client';

import { useEffect, useRef } from 'react';
import type { Product } from '@/data/products';
import { GRID_SIZE } from '@/lib/pixelArt';

type BoardState = {
  currentIdx: number;
  nextIdx: number;
  progress: number;
};

type Props = {
  products: Product[];
  getState: () => BoardState;
  size: number;
};

function pseudoRandom(x: number, y: number, seed: number): number {
  const h = Math.sin(x * 12.9898 + y * 78.233 + seed * 43.5453) * 43758.5453;
  return h - Math.floor(h);
}

export function PixelBoard({ products, getState, size }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const cellSize = size / GRID_SIZE;

    const render = () => {
      const state = getState();
      const current = products[state.currentIdx]?.pixelArt;
      const next = products[state.nextIdx]?.pixelArt;
      if (!current || !next) {
        rafRef.current = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, size, size);

      ctx.strokeStyle = 'rgba(10,10,10,0.07)';
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      for (let i = 0; i <= GRID_SIZE; i++) {
        const pos = i * cellSize + 0.5;
        ctx.moveTo(pos, 0);
        ctx.lineTo(pos, size);
        ctx.moveTo(0, pos);
        ctx.lineTo(size, pos);
      }
      ctx.stroke();

      const { progress } = state;
      const boundaryRow = GRID_SIZE * (1 - progress);
      const glitchBand = 2;
      const seed = Math.floor(progress * 40);

      for (let y = 0; y < GRID_SIZE; y++) {
        for (let x = 0; x < GRID_SIZE; x++) {
          let color: string | null;

          if (progress <= 0.001) {
            color = current[y][x];
          } else if (progress >= 0.999) {
            color = next[y][x];
          } else {
            const distToBoundary = y - boundaryRow;
            if (distToBoundary > glitchBand) {
              color = next[y][x];
            } else if (distToBoundary < -glitchBand) {
              color = current[y][x];
            } else {
              const rand = pseudoRandom(x, y, seed);
              if (rand < 0.35) color = current[y][x];
              else if (rand < 0.7) color = next[y][x];
              else if (rand < 0.92) color = null;
              else color = '#0a0a0a';
            }
          }

          if (color) {
            ctx.fillStyle = color;
            ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
          }
        }
      }

      rafRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [products, getState, size]);

  return <canvas ref={canvasRef} aria-hidden="true" />;
}
