import type { Product } from '@/data/products';

type Props = {
  product: Product;
  isLast: boolean;
};

export function ProductSection({ product, isLast }: Props) {
  return (
    <section
      className="relative"
      style={{ height: isLast ? '100vh' : '200vh' }}
    >
      <div className="absolute left-[5vw] top-[14vh] z-20 max-w-xl">
        <div className="mb-3 text-[10px] tracking-[0.3em] text-neutral-400">
          {product.number}
        </div>
        <h2 className="text-[clamp(2.5rem,5.5vw,5rem)] font-light leading-[1.02] tracking-tight">
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
