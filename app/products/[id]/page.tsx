import { getProductsById } from '@/lib/actions/products-actions';
import { formatPrice } from '@/lib/utils/format-price';
import { notFound } from 'next/navigation';

export default async function productPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await getProductsById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{product.name}</h1>
      <p>{product.description}</p>
      <p>{formatPrice(product.sellingPrice)}</p>
    </div>
  );
}
