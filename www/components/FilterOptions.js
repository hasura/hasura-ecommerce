import * as React from "react";
import { useAtom } from "jotai";

import {
  onlyFreeShipping,
  includeOutOfStock,
  onlyOnSale,
  onlyFinalClearance,
} from "../state/FilterState";

const FilterOptions = () => {
  const [onlyFreeShippingState, setOnlyFreeShippingState] = useAtom(
    onlyFreeShipping
  );
  const [includeOutOfStockState, setIncludeOutOfStockState] = useAtom(
    includeOutOfStock
  );
  const [onlyOnSaleState, setOnlyOnSaleState] = useAtom(onlyOnSale);
  const [onlyFinalClearanceState, setOnlyFinalClearanceState] = useAtom(
    onlyFinalClearance
  );

  return (
    <React.Fragment>
      <label className="mb-xxs">Shipping</label>
      <div className="checkbox mb-sm">
        <input
          type="checkbox"
          id="shipping"
          name="shipping"
          onChange={(e) => {
            setOnlyFreeShippingState((v) => !v);
          }}
        />
        <label htmlFor="shipping">FREE Shipping</label>
      </div>
      <label className="mb-xxs">Sale</label>
      <div className="checkbox mb-xxs">
        <input
          type="checkbox"
          id="sale"
          name="sale"
          onChange={(e) => setOnlyOnSaleState((v) => !v)}
        />
        <label htmlFor="sale">On Sale</label>
      </div>
      <div className="checkbox mb-sm">
        <input
          type="checkbox"
          id="clearance"
          name="clearance"
          onChange={(e) => setOnlyFinalClearanceState((v) => !v)}
        />
        <label className="red" htmlFor="clearance">
          Final Clearance
        </label>
      </div>
      <label className="mb-xxs">Availability</label>
      <div className="checkbox mb-xxs">
        <input
          type="checkbox"
          id="stock"
          name="stock"
          onChange={(e) => setIncludeOutOfStockState((v) => !v)}
        />
        <label htmlFor="stock">Show Out of Stock</label>
      </div>
    </React.Fragment>
  );
};

export default FilterOptions;
