'use server';

import { prisma } from '../prisma';

export async function getProductsById(id: string) {
  const product = await prisma.productModel.findUnique({
    where: { id },
    include: {
      category: true,
      images: true,
    },
  });

  return !product ? null : product;
}
