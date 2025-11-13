import {
  defaultOrderConstant,
  priceHighToLowConstant,
  priceLowToHighConstant,
} from '@/prisma/seeds/lookups/lookup-seeds/order-by-lookup-seed';
import { SortOrderConstants } from '../sort-order-constants';

export type ProductStatusMap = {
  [key: string]: {};
};

export const OrderByDictionary: ProductStatusMap = {
  [defaultOrderConstant.id]: {},
  [priceLowToHighConstant.id]: { price: SortOrderConstants.ascending },
  [priceHighToLowConstant.id]: { price: SortOrderConstants.descending },
};
