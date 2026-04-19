'use client';

import { useEffect, useRef } from 'react';
import type { Product } from '@/data/products';

const SECTION_HEIGHT_VH = 200;
const LINE_OFFSET_VH = -35;

type BoardState = {
  currentIdx: number;
  nextIdx: number;
  progress: number;
};

type Props = {
  product: Product;
  productIdx: number;
  isFirst: boolean;
  getState: () => BoardState;
};

function computeOpacity(productIdx: number, state: BoardState): number {
  const { currentIdx, nextIdx, progress } = state;
  if (currentIdx === nextIdx) {
    return productIdx === currentIdx ? 1 : 0;
  }
  if (productIdx === currentIdx) {
    if (progress < 0.15) return 1;
    if (progress > 0.55) return 0.35;
    return 1 - 0.65 * ((progress - 0.15) / 0.4);
  }
  if (productIdx === nextIdx) {
    if (progress < 0.15) return 0;
    if (progress > 0.55) return 1;
    return (progress - 0.15) / 0.4;
  }
  return 0;
}

export function ProductSection({
  product,
  productIdx,
  isFirst,
  getState,
}: Props) {
  const sloganRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId = 0;
    let scheduled = false;

    const update = () => {
      const state = getState();
      const opacity = computeOpacity(productIdx, state);
      const vh = window.innerHeight;
      const scrollY = window.scrollY;

      let sloganTop = '12vh';
      let descTop = '78vh';

      const isTransition = state.currentIdx !== state.nextIdx;

      if (isTransition) {
        const linePageVh =
          (state.currentIdx + 1) * SECTION_HEIGHT_VH + LINE_OFFSET_VH;
        const lineVpVh = linePageVh - (scrollY / vh) * 100;

        if (productIdx === state.currentIdx) {
          sloganTop = '12vh';
          descTop = '78vh';
        } else if (productIdx === state.nextIdx) {
          sloganTop = `${(lineVpVh + 8).toFixed(2)}vh`;
          descTop = `${(lineVpVh + 60).toFixed(2)}vh`;
        } else {
          sloganTop = '120vh';
          descTop = '120vh';
        }
      } else {
        if (productIdx !== state.currentIdx) {
          sloganTop = '120vh';
          descTop = '120vh';
        }
      }

      if (sloganRef.current) {
        sloganRef.current.style.top = sloganTop;
        sloganRef.current.style.opacity = opacity.toFixed(3);
      }
      if (descRef.current) {
        descRef.current.style.top = descTop;
        descRef.current.style.opacity = opacity.toFixed(3);
      }

      scheduled = false;
    };

    const onScroll = () => {
      if (!scheduled) {
        scheduled = true;
        rafId = requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [productIdx, getState]);

  return (
    <section className="relative" style={{ height: '200vh' }}>
      {!isFirst && (
        <div
          aria-hidden="true"
          className="absolute inset-x-0 z-30 h-px bg-neutral-800"
          style={{ top: '-35vh' }}
        />
      )}

      <div
        ref={sloganRef}
        className="fixed left-[5vw] z-20 max-w-xl transition-[opacity] duration-200"
        style={{ top: '12vh', opacity: 0 }}
      >
        <div className="mb-4 flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase">
          <span className="text-neutral-400">{product.number}</span>
          <span aria-hidden="true" className="text-neutral-300">
            ·
          </span>
          {product.link ? (
            <a
              href={product.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-neutral-700 hover:underline"
            >
              {product.name}
            </a>
          ) : (
            <span className="text-neutral-700">{product.name}</span>
          )}
        </div>
        <h2 className="whitespace-pre-line text-[clamp(2.5rem,5.5vw,5rem)] font-light leading-[1.02] tracking-tight">
          {product.slogan}
        </h2>
      </div>

      <div
        ref={descRef}
        className="fixed right-[5vw] z-20 max-w-xs transition-[opacity] duration-200"
        style={{ top: '78vh', opacity: 0 }}
      >
        <p className="text-sm leading-relaxed text-neutral-600">
          {product.description}
        </p>
        {product.link && (
          <a
            href={product.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1 text-[11px] tracking-[0.2em] uppercase text-neutral-800 hover:underline"
          >
            <span aria-hidden="true">→</span>
            <span>{product.link.label}</span>
          </a>
        )}
      </div>
    </section>
  );
}
