import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { getProductsById } from '@/lib/actions/products-actions';
import { formatPrice } from '@/lib/utils/format-price';
import { Separator } from '@radix-ui/react-separator';
import { notFound } from 'next/navigation';

export default async function Loading() {
  return (
    <main className="container mx-auto p-4">
      <Card className="max-w-3xl mx-auto">
        <CardContent className="p-6">
          <Skeleton className="h-8 w-1/2" />

          <div className="flex item-center gap-2 mb-4">
            <Skeleton className="h-8 w-1/2" />
            <Skeleton className="h-8 w-1/2" />
          </div>
          <Separator className="my-4" />

          <div className="space-y-2">
            <Skeleton className="h-8 w-1/2" />
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
