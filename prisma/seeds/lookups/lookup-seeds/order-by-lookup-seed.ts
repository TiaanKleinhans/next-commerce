// export const default ={
//     id : "cloyr72j80000r3s55u6v72g4",
//     value : 'default',
//     lookupTypeId : orderByLookupsType,
// } as LookupModel;

import { LookupModel, PrismaClient } from '@prisma/client';
import { orderByLookupsType } from '../lookup-type-seed';

export const defaultOrderConstant = {
  id: 'cloyr72j80000r3s55u6v72g4',
  value: 'Default',
  lookupTypeId: orderByLookupsType.id,
} as LookupModel;

export const priceLowToHighConstant = {
  id: 'cloyr72j90001r3s57r4l8g2j',
  value: 'Price Low To High',
  lookupTypeId: orderByLookupsType.id,
} as LookupModel;

export const priceHighToLowConstant = {
  id: 'cloyr72j90002r3s57r4l8g2k',
  value: 'Price High To Low',
  lookupTypeId: orderByLookupsType.id,
} as LookupModel;

const allLookups = [
  defaultOrderConstant,
  priceLowToHighConstant,
  priceHighToLowConstant,
] as LookupModel[];

export async function SeedOrderByLookup(prisma: PrismaClient) {
  allLookups.forEach(async (_) => {
    const existing = await prisma.lookupModel.findUnique({
      where: { id: _.id },
    });
    if (!existing) {
      await prisma.lookupModel.create({
        data: _,
      });
    }
  });
}
