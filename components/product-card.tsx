import { formatPrice } from "@/lib/utils/format-price";
import Image from "next/image";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { ProductModel } from "@prisma/client";

export function ProductCard({product} : {product:ProductModel}) {


return(
<Card className="pt-0 overflow-hide">
    <div className="relative aspect-video">
    {/* <Image
    className="obect-cover" 
    fill
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    src={product.imageUrl}
    alt={product.name}
/> */}
</div>

<CardHeader>
    <CardTitle>{product.name}</CardTitle>
    <CardDescription>{product.description}</CardDescription>
</CardHeader>
    <CardFooter>  {formatPrice(product.available)} </CardFooter>
    
</Card>
);

}