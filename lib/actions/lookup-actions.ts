'use server';

import { prisma } from '../prisma';

export async function getLookupById(id: string) {
  const lookup = await prisma.lookupModel.findUnique({
    where: { id },
    include: {
      lookupType: true,
    },
  });

  return !lookup ? null : lookup;
}
