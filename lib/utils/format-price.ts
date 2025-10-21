import { Decimal } from '@prisma/client/runtime/library';

export function formatPrice(price: Decimal): string {
  return new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
  }).format(price.toNumber());
}
