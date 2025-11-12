import Breadcrumbs from '@/components/breadcrumbs/breadcrumbs';
import { ProductCard } from '@/components/product-card';
import { prisma } from '@/lib/prisma';
import { Label } from '@radix-ui/react-dropdown-menu';
import { Suspense } from 'react';
import { ProductCardSkeleton } from '../../product-card-skeleton';
import { notFound } from 'next/navigation';
import { promises } from 'dns';

type CategoryProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ orderBy?: string }>;
};

async function Products({ categoryId: orderBy }: { categoryId: string; orderBy?: string }) {
  let orderBy: Record<string>;
  const products = await prisma.productModel.findMany({
    where: {
      categoryId: categoryId,
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

export default async function CategoryPage({ params }: CategoryProps) {
  const { id } = await params;

  const category = await prisma.categoryModel.findUnique({
    where: {
      id,
    },
    select: {
      name: true,
      id: true,
    },
  });

  if (!category) {
    notFound();
  }

  const breadCrumbs = [
    { label: 'Products', href: '/' },
    { label: category.name, href: `/search/${category.id}` },
  ];

  return (
    <main className="container mx-auto py-4">
      <Breadcrumbs items={breadCrumbs} />
      <Suspense key={id} fallback={<ProductCardSkeleton />}>
        <Products categoryId="{id}" />
      </Suspense>
    </main>
  );
}
