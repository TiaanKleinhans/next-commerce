import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getProductsById } from '@/lib/actions/products-actions';
import { formatPrice } from '@/lib/utils/format-price';
import { Separator } from '@radix-ui/react-separator';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await getProductsById(id);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  if (!product) {
    notFound();
  }

  return (
    <main className="container mx-auto p-4">
      <Card className="max-w-3xl mx-auto">
        <CardContent className="p-6 gid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative rounded-lg overflow-hidden h-[200px] md:h-[300px] md:h-[300px]">
            {product.images.length != 0 && (
              <Image
                src={(() => {
                  const imagesToUse = product.images.filter((img) => img.isDefault);
                  const images = imagesToUse.length > 0 ? imagesToUse : product.images;

                  return (
                    images
                      .sort((a, b) => (a.sortOrder ?? Infinity) - (b.sortOrder ?? Infinity))
                      .map((_) => _.url)[0] ?? ''
                  );
                })()}
                alt={product.name}
                sizes="(max-width:768px) 100vw , 50vw  "
                fill
                priority
              ></Image>
            )}
          </div>

          <h1 className="text-3xl font-bold mb-6">{product.name}</h1>

          <div className="flex item-center gap-2 mb-4">
            <span className="font-semibold text-lg">{formatPrice(product.sellingPrice)}</span>

            <Badge variant="outline">{product.category?.name}</Badge>
          </div>
          <Separator className="my-4" />

          <div className="space-y-2">
            <h2 className="font-medium">
              <p>{product.description}</p>
            </h2>
          </div>

          <Separator className="my-4" />

          <div className="space-y-2">
            <h2 className="font-medium">Availability : </h2>
            <div className="flex items-center gap-2">
              {product.available > 0 ? (
                <Badge variant="outline" className="text-green-600">
                  {product.available} In Stock
                </Badge>
              ) : (
                <Badge variant="outline" className="text-red-600">
                  Out of Stock
                </Badge>
              )}
            </div>
          </div>

          <Separator className="my-4" />

          <div>
            <Button disabled={product.available <= 0} className="w-full">
              <ShoppingCart className="mr-2 h-4 w-4" />
              {product.available > 0 ? 'Add to Cart' : 'Out of Stock'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
