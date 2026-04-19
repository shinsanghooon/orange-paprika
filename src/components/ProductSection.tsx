import type { Product } from '@/data/products';

type Props = {
  product: Product;
  isFirst: boolean;
};

export function ProductSection({ product, isFirst }: Props) {
  return (
    <section
      className="relative"
      style={{ height: '200vh' }}
    >
      {!isFirst && (
        <div
          aria-hidden="true"
          className="absolute inset-x-0 z-30 h-px bg-neutral-800"
          style={{ top: '-35vh' }}
        />
      )}
      <div className="absolute left-[5vw] top-[14vh] z-20 max-w-xl">
        <div className="mb-4 flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase">
          <span className="text-neutral-400">{product.number}</span>
          <span aria-hidden="true" className="text-neutral-300">
            ·
          </span>
          <span className="text-neutral-700">{product.name}</span>
        </div>
        <h2 className="whitespace-pre-line text-[clamp(2.5rem,5.5vw,5rem)] font-light leading-[1.02] tracking-tight">
          {product.slogan}
        </h2>
      </div>
      <div className="absolute right-[5vw] top-[74vh] z-20 max-w-xs">
        <p className="text-sm leading-relaxed text-neutral-600">
          {product.description}
        </p>
      </div>
    </section>
  );
}
