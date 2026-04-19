'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Lenis from 'lenis';
import { products } from '@/data/products';
import { PixelBoard } from '@/components/PixelBoard';
import { Nav } from '@/components/Nav';
import { FooterMeta } from '@/components/FooterMeta';
import { ProductSection } from '@/components/ProductSection';

export default function Home() {
  const scrollRef = useRef({ scrollY: 0, vh: 0 });
  const [boardSize, setBoardSize] = useState(480);

  useEffect(() => {
    const update = () => {
      scrollRef.current.scrollY = window.scrollY;
      scrollRef.current.vh = window.innerHeight;
      const minDim = Math.min(window.innerHeight, window.innerWidth);
      setBoardSize(Math.max(320, Math.min(Math.floor(minDim * 0.55), 560)));
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
    const lastIdx = products.length - 1;
    if (vh === 0) return { currentIdx: 0, nextIdx: 0, progress: 0 };

    const phase = scrollY / vh;
    const phaseIdx = Math.floor(phase);
    const phaseProg = phase - phaseIdx;

    if (phaseIdx < 0) return { currentIdx: 0, nextIdx: 0, progress: 0 };

    const totalPhases = products.length * 2 - 1;
    if (phaseIdx >= totalPhases) {
      return { currentIdx: lastIdx, nextIdx: lastIdx, progress: 0 };
    }

    if (phaseIdx % 2 === 0) {
      const idx = phaseIdx / 2;
      return { currentIdx: idx, nextIdx: idx, progress: 0 };
    }
    const currentIdx = (phaseIdx - 1) / 2;
    return {
      currentIdx,
      nextIdx: Math.min(currentIdx + 1, lastIdx),
      progress: phaseProg,
    };
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
          isFirst={idx === 0}
        />
      ))}
    </main>
  );
}
