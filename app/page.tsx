import { ProductCard } from '@/components/product-card';
import { prisma } from '@/lib/prisma';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Suspense } from 'react';
import ProductsSkeleton from './products-skeleton';

type SearchParams = Promise<{
  [key: string]: string | string[] | undefined;
}>;

const pageSize = 1;

async function Products({ page }: { page: number }) {
  const skip = (page - 1) * pageSize;

  const products = await prisma.productModel.findMany({
    skip,
    take: pageSize,
  });

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <>
      <p>Showing {products.length} Products</p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols2 lg: grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default async function HomePage(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;

  const total = await prisma.productModel.count();
  const totalPages = Math.ceil(total / pageSize);

  const page = Number(searchParams.page) || 1;

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Home</h1>
      <Suspense key={page} fallback={<ProductsSkeleton />}>
        <Products page={page} />
      </Suspense>

      <Pagination className="mt-8">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href={`?page=${page - 1}`} />
          </PaginationItem>

          {Array.from({ length: totalPages }, (_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                href={`?page=${index + 1}`}
                className={page === index + 1 ? 'active' : ''}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href={`?page=${page + 1}`} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </main>
  );
}
