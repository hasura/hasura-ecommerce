import { atom } from "jotai";
import { openclient } from "../utils/generated/client";

import { selectedCategory } from "./FilterState";

export const brands = atom([]);
export const brandsLoading = atom(false);
export const brandsLoadingError = atom(null);

export const fetchBrandData = atom(null, (_get, set, url) => {
  const fetchData = async () => {
    set(brandsLoading, true);

    try {
      const category = _get(selectedCategory);
      const where = {
        price: {
          _is_null: false,
        },
      };

      if (category) {
        where.category = {
          name: {
            _eq: category,
          },
        };
      }

      const { product } = await openclient.query({
        product: [
          {
            distinct_on: ["brand"],
            where,
          },
          {
            brand: true,
          },
        ],
      });

      set(brandsLoading, false);
      set(brands, product);
    } catch (error) {
      set(brandsLoading, false);
      set(brandsLoadingError, error.message);
    }
  };
  fetchData();
  return true;
});
