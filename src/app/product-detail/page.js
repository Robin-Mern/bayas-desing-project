import ProductDetail from '@/components/ProductDetail/ProductDetail';
import HomeCta from '@/components/HomeCta/HomeCta';

export const metadata = {
  title: "Bull-wood Art Light | The Bayas Designs",
  description: "Crafted with artistic precision, Bull Wood Art Light combines the natural beauty of wood with warm, elegant illumination.",
};

export default function ProductDetailPage() {
  return (
    <main>
      <ProductDetail />
      <HomeCta />
    </main>
  );
}

