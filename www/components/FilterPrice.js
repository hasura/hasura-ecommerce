import * as React from "react";
import { useAtom } from "jotai";

import { priceLow, priceHigh } from "../state/FilterState";

const MIN_PRICE = "0";
const MAX_PRICE = "1000000";

const priceBrackets = [
  {
    label: "All",
    slug: "all",
    low: MIN_PRICE,
    high: MAX_PRICE,
  },
  {
    label: "Under $25",
    slug: "under-25",
    low: MIN_PRICE,
    high: "25",
  },
  {
    label: "$25 - $50",
    slug: "25-50",
    low: "25",
    high: "50",
  },
  {
    label: "$50 - $100",
    slug: "50-100",
    low: "50",
    high: "100",
  },
  {
    label: "$100 - $200",
    slug: "100-200",
    low: "100",
    high: "200",
  },
  {
    label: "$200 & Above",
    slug: "200-above",
    low: "200",
    high: MAX_PRICE,
  },
];

const FilterPrice = () => {
  const [priceLowState, setPriceLowState] = useAtom(priceLow);
  const [priceHighState, setPriceHighState] = useAtom(priceHigh);

  const [inputState, setInputState] = React.useState("clean");

  const setHighPrice = (e) => {
    if (e.target.value.length) {
      setInputState("dirty");
    }
    setPriceHighState(e.target.value);
  };

  const setLowPrice = (e) => {
    if (e.target.value.length) {
      setInputState("dirty");
    }
    setPriceLowState(e.target.value);
  };

  const priceChange = (e) => {
    const { low, high } = priceBrackets.find((pb) => pb.slug === e.target.id);

    setPriceHighState(high);
    setPriceLowState(low);
  };

  const inputDirty = inputState === "dirty";

  return (
    <React.Fragment>
      <label className="mb-xxs">Price Range</label>

      {priceBrackets.map((bracket, index) => {
        let checked = false;

        if (priceLowState === bracket.low && priceHighState === bracket.high) {
          checked = true;
        }

        return (
          <div className="radio mb-xxs" key={index}>
            <input
              type="radio"
              id={bracket.slug}
              name="price-radios"
              checked={checked}
              onChange={priceChange}
            />
            <label htmlFor={bracket.slug}>{bracket.label}</label>
          </div>
        );
      })}

      <div className="input-start blank mb-xs w-100">
        <span>$</span>
        <input
          placeholder="From..."
          value={inputDirty ? priceLowState : ""}
          onChange={setLowPrice}
        />
      </div>
      <div className="input-start blank mb-sm w-100">
        <span>$</span>
        <input
          placeholder="To..."
          value={inputDirty ? priceHighState : ""}
          onChange={setHighPrice}
        />
      </div>
    </React.Fragment>
  );
};

export default FilterPrice;
