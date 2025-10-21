import { ProductCardSkeleton } from './product-card-skeleton';
import ProductsSkeleton from './products-skeleton';

export default function Loading() {
  return (
    // <div className="flex items-center justify-center h-screen">
    //     <div className="w-20 h-20 border-t-2 border-gray-800 rounded-full animate-spin"></div>
    // </div>

    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Home</h1>

      <ProductsSkeleton />
    </main>
  );
}
