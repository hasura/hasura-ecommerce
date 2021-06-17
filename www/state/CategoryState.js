import { atom } from "jotai";
import { openclient } from "../utils/generated/client";

export const categories = atom([]);
export const categoriesLoading = atom(false);
export const categoriesLoadingError = atom(null);

export const fetchCategoryData = atom(null, (_get, set) => {
  const fetchData = async () => {
    set(categoriesLoading, true);

    try {
      const { product_category_enum } = await openclient.query({
        product_category_enum: {
          display_name: true,
          name: true,
        },
      });

      set(categoriesLoading, false);
      set(categories, product_category_enum);
    } catch (error) {
      set(categoriesLoading, false);
      set(categoriesLoadingError, error.message);
    }
  };
  fetchData();
  return true;
});
