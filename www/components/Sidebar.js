import * as React from "react";
import { useAtom } from "jotai";

import { menuIsOpen } from "../state/MenuState";

import FilterBrands from "./FilterBrands";
import FilterPrice from "./FilterPrice";
import FilterOptions from "./FilterOptions";
import FilterDebug from "./FilterDebug";

const Sidebar = ({ debug = false }) => {
  const [menuOpen, setMenuOpen] = useAtom(menuIsOpen);

  return (
    <React.Fragment>
      <div
        id="left-sidebar"
        className={`header pad-sm ${menuOpen ? "active" : ""}`}
      >
        <FilterBrands />
        <FilterPrice />
        <FilterOptions />
        {debug && <FilterDebug />}
      </div>
      <div
        id="left-sidebar-bg"
        onClick={() => setMenuOpen(false)}
        className={`${menuOpen ? "active" : ""}`}
      />
    </React.Fragment>
  );
};

export default Sidebar;
