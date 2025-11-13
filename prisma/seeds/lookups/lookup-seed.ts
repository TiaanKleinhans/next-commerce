import { PrismaClient } from '@prisma/client';
import { SeedOrderByLookup } from './lookup-seeds/order-by-lookup-seed';
import { SeedCategoryLookup } from './lookup-seeds/category-lookup-seed';

export async function seedLookups(prisma: PrismaClient) {
  await SeedCategoryLookup(prisma);
  await SeedOrderByLookup(prisma);
}
