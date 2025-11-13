import Breadcrumbs from '@/components/breadcrumbs/breadcrumbs';
import { ProductCard } from '@/components/product-card';
import { prisma } from '@/lib/prisma';
import { Label } from '@radix-ui/react-dropdown-menu';
import { Suspense } from 'react';
import { ProductCardSkeleton } from '../../product-card-skeleton';
import { notFound } from 'next/navigation';
import { promises } from 'dns';
import { SortOrderConstants } from '@/lib/constants/sort-order-constants';
import { OrderByDictionary } from '@/lib/constants/dictionary/order-by-dictionary';
import { defaultOrderConstant } from '@/prisma/seeds/lookups/lookup-seeds/order-by-lookup-seed';
import Link from 'next/link';

type CategoryProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ orderBy?: string }>;
};

async function Products({ categoryId, orderBy }: { categoryId: string; orderBy?: string }) {
  let sortOrder:
    | Record<string, typeof SortOrderConstants.ascending | typeof SortOrderConstants.descending>
    | undefined = undefined;

  const currentOrder = OrderByDictionary[orderBy ?? defaultOrderConstant.id];

  const products = await prisma.productModel.findMany({
    where: {
      categoryId: categoryId,
    },
    orderBy: currentOrder,
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

export default async function CategoryPage({ params, searchParams }: CategoryProps) {
  const { id } = await params;
  const { orderBy } = await searchParams;

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

      <div className="flex gap-3 text-sm">
        {/* REVIEW This Breadcrumbs will have to be modified to show  current order bu / sort */}
        <Link href={`/search/${id}`}>Default</Link>
        {/* <Link href={`/search/${id}?sort=price-asc`}>Price : Low To High</Link> */}
      </div>

      <Suspense key={`${id}-${orderBy}`} fallback={<ProductCardSkeleton />}>
        <Products categoryId="{id}" orderBy={orderBy} />
      </Suspense>
    </main>
  );
}
