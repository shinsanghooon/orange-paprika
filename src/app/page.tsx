'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Lenis from 'lenis';
import { products } from '@/data/products';
import { PixelBoard } from '@/components/PixelBoard';
import { Nav } from '@/components/Nav';
import { FooterMeta } from '@/components/FooterMeta';
import { ProductSection } from '@/components/ProductSection';

const SECTION_HEIGHT_VH = 200;
const LINE_OFFSET_VH = -35;

export default function Home() {
  const scrollRef = useRef({ scrollY: 0, vh: 0 });
  const boardSizeRef = useRef(480);
  const [boardSize, setBoardSize] = useState(480);

  useEffect(() => {
    const update = () => {
      scrollRef.current.scrollY = window.scrollY;
      scrollRef.current.vh = window.innerHeight;
      const minDim = Math.min(window.innerHeight, window.innerWidth);
      const next = Math.max(320, Math.min(Math.floor(minDim * 0.55), 560));
      boardSizeRef.current = next;
      setBoardSize(next);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  const getState = useCallback(() => {
    const { scrollY, vh } = scrollRef.current;
    const size = boardSizeRef.current;
    if (vh === 0) return { currentIdx: 0, nextIdx: 0, progress: 0 };

    const boardTopVP = vh * 0.5 - size / 2;
    const boardBottomVP = vh * 0.5 + size / 2;
    const lineCount = products.length - 1;

    let currentIdx = 0;
    let nextIdx = 0;
    let progress = 0;

    for (let i = 0; i < lineCount; i++) {
      const linePageY =
        ((i + 1) * SECTION_HEIGHT_VH + LINE_OFFSET_VH) * (vh / 100);
      const lineVP = linePageY - scrollY;

      if (lineVP > boardBottomVP) {
        currentIdx = i;
        nextIdx = i;
        progress = 0;
        return { currentIdx, nextIdx, progress };
      }

      if (lineVP < boardTopVP) {
        currentIdx = i + 1;
        nextIdx = i + 1;
        progress = 0;
        continue;
      }

      currentIdx = i;
      nextIdx = i + 1;
      progress = (boardBottomVP - lineVP) / (boardBottomVP - boardTopVP);
      return { currentIdx, nextIdx, progress };
    }

    return { currentIdx, nextIdx, progress };
  }, []);

  const productList = useMemo(() => products, []);

  return (
    <main className="relative min-h-screen bg-[#f5f1ea] text-[#0a0a0a] antialiased">
      <Nav />
      <FooterMeta />

      <div className="pointer-events-none fixed inset-0 z-10 flex items-center justify-center">
        <PixelBoard
          products={productList}
          getState={getState}
          size={boardSize}
        />
      </div>

      {productList.map((product, idx) => (
        <ProductSection
          key={product.number}
          product={product}
          productIdx={idx}
          isFirst={idx === 0}
          getState={getState}
        />
      ))}
    </main>
  );
}
