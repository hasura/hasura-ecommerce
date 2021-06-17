import { atom } from "jotai";
import { openclient } from "../utils/generated/client";

import { searchState } from "./FilterState";

export const offers = atom([]);
export const offersLoading = atom(false);
export const offersLoadingError = atom(null);

export const fetchData = atom(null, (_get, set) => {
  const fetchData = async () => {
    set(offersLoading, true);
    try {
      const filters = _get(searchState);

      const {
        searchString,
        priceLow = 0,
        priceHigh = 1000,
        onlyFreeShipping,
        onlyOnSales,
        onlyFinalClearance,
        selectedBrands,
        includeOutOfStock,
        limit = 12,
        category,
      } = filters;

      const _gte = new Number(priceLow).valueOf();
      const _lte = new Number(priceHigh).valueOf();

      const where = {
        category: {
          name: {
            _eq: category,
          },
        },
        price: {
          _is_null: false,
          _gte,
          _lte,
        },
      };

      if (selectedBrands && selectedBrands.length) {
        where.brand = {
          _in: selectedBrands,
        };
      }

      const { product } = await openclient.query({
        product: [
          {
            limit,
            where,
          },
          {
            id: true,
            name: true,
            description: true,
            price: true,
            image_urls: true,
            brand: true,
          },
        ],
      });

      set(offersLoading, false);
      set(offers, product);
    } catch (error) {
      set(offersLoading, false);
      set(offersLoadingError, error.message);
    }
  };
  fetchData();
  return true;
});
