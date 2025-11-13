import { LookupTypeModel, PrismaClient } from '@prisma/client';

export const categoriesLookupType = {
  id: 'cljv1nz0a0000bmk6q9r2h3s4',
  name: 'LK_CATEGORIES',
} as LookupTypeModel;

export const brandLookupType = {
  id: 'cljv1ny6q0000amk6a9p2f7t1',
  name: 'LK_BRAND',
} as LookupTypeModel;

export const orderByLookupsType = {
  id: 'clp9x4r0000003b6d05y08j2h',
  name: 'LK_ORDER_BY',
} as LookupTypeModel;

const allLookupTypes = [
  categoriesLookupType,
  brandLookupType,
  orderByLookupsType,
] as LookupTypeModel[];

export async function SeedLookupType(prisma: PrismaClient) {
  allLookupTypes.forEach(async (_) => {
    const existing = await prisma.lookupTypeModel.findUnique({
      where: { id: _.id },
    });

    if (!existing) {
      await prisma.lookupTypeModel.create({
        data: _,
      });
    }
  });
}
