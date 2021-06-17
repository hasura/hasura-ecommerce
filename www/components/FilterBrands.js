import * as React from "react";
import { useAtom } from "jotai";

import { selectedBrands, selectedCategory } from "../state/FilterState";

import {
  brands,
  brandsLoading,
  brandsLoadingError,
  fetchBrandData,
} from "../state/BrandState";

const SLICE_SIZE = 10;

const FilterBrands = () => {
  // Handlers
  const brandChange = (e, brand) => {
    if (selectedBrandsState.includes(brand)) {
      setSelectedBrandsState((values) =>
        values.filter((item) => item !== brand)
      );
    } else {
      setSelectedBrandsState((values) => [brand, ...values]);
    }
  };

  const filter = (input) => {
    if (search.length) {
      return input.brand.toLowerCase().includes(search.toLowerCase());
    }
    return true;
  };

  // Global State
  const [_, fetchBrands] = useAtom(fetchBrandData);
  const [selectedBrandsState, setSelectedBrandsState] = useAtom(selectedBrands);
  const [brandState] = useAtom(brands);
  const [brandsLoadingState] = useAtom(brandsLoading);

  const [selectedCategoryState] = useAtom(selectedCategory);

  // React Life Cycle
  React.useEffect(() => {
    fetchBrands("http://localhost:3000/api/brands");
  }, [selectedCategoryState]);

  // Local State
  const [search, setSearch] = React.useState("");
  const [sliced, setSliced] = React.useState(true);

  // Derived Local State
  const brandList = brandState.filter(filter);
  const paginate = brandList.length > SLICE_SIZE;
  const slice = sliced ? SLICE_SIZE : undefined;

  return (
    <React.Fragment>
      <label className="mb-xxs">Brand</label>
      <div className="input-start blank mb-xs w-100">
        <span>
          <ion-icon name="search" />
        </span>
        <input
          placeholder="Brand..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {brandsLoadingState && <p>Loading…</p>}
      {!brandList.length && <p>No Items...</p>}
      {brandList.length > 1 &&
        brandList
          .filter(filter)
          .slice(0, slice)
          .map(({ brand, slug }, index) => (
            <div className="checkbox mb-xxs" key={index}>
              <input
                type="checkbox"
                id={slug}
                name="checkboxes-card"
                onChange={(e) => brandChange(e, brand)}
                checked={selectedBrandsState.includes(brand)}
              />
              <label htmlFor={slug}>{brand}</label>
            </div>
          ))}
      {sliced && paginate && (
        <button className="btn-reset mb-sm" onClick={() => setSliced(false)}>
          <p className="mb-sm sm">
            More Brands <ion-icon name="chevron-down" />
          </p>
        </button>
      )}
      {paginate && !sliced && (
        <button className="btn-reset mb-sm" onClick={() => setSliced(true)}>
          <p className="mb-sm sm">
            Less Brands <ion-icon name="chevron-up" />
          </p>
        </button>
      )}
    </React.Fragment>
  );
};

export default FilterBrands;
