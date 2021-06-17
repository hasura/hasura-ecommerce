import { atom } from "jotai";

export const searchString = atom("");
export const priceLow = atom("0");
export const priceHigh = atom("1000000");
export const onlyFreeShipping = atom(false);
export const includeOutOfStock = atom(false);
export const onlyOnSale = atom(false);
export const onlyFinalClearance = atom(false);
export const selectedBrands = atom([]);
export const selectedCategory = atom("home_furnishing");

export const searchState = atom((get) => ({
  searchString: get(searchString),
  priceLow: get(priceLow),
  priceHigh: get(priceHigh),
  onlyFreeShipping: get(onlyFreeShipping),
  onlyOnSales: get(onlyOnSale),
  onlyFinalClearance: get(onlyFinalClearance),
  selectedBrands: get(selectedBrands),
  includeOutOfStock: get(includeOutOfStock),
  category: get(selectedCategory),
}));
