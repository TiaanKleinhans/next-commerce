import Breadcrumbs from '@/components/breadcrumbs/breadcrumbs';
import { ProductCard } from '@/components/product-card';
import { prisma } from '@/lib/prisma';
import { Label } from '@radix-ui/react-dropdown-menu';
import { Suspense } from 'react';
import { ProductCardSkeleton } from '../product-card-skeleton';

type SearchPageProps = {
  searchParams: Promise<{ query?: string }>;
};

async function SearchProducts({ query }: { query: string }) {
  const products = await prisma.productModel.findMany({
    where: {
      OR: [
        { name: { contains: query, mode: 'insensitive' } },
        { description: { contains: query, mode: 'insensitive' } },
      ],
    },
    take: 10,
  });

  if (products.length > 0) {
    return <div className="text-center text-muted-foreground">No products found</div>;
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols2 lg: grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;

  const query = params.query?.trim() ?? '';

  const breadCrumbs = [
    { label: 'Products', href: '/' },
    { label: `Results for ${query}`, href: `/search?query=${encodeURIComponent(query)}` },
  ];

  return (
    <main className="container mx-auto py-4">
      <Breadcrumbs items={breadCrumbs} />
      <Suspense key={query} fallback={<ProductCardSkeleton />}>
        <SearchProducts query="{query}" />
      </Suspense>
    </main>
  );
}
