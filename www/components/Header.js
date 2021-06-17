import * as React from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import { useAtom } from "jotai";

import { menuIsOpen } from "../state/MenuState";

import {
  categories,
  categoriesLoading,
  categoriesLoadingError,
  fetchCategoryData,
} from "../state/CategoryState";

import { searchString } from "../state/FilterState";

import HeaderControls from "./HeaderControls";

const NUM_DISPLAYED_CATEGORIES = 10;

const Header = () => {
  const [, setMenuOpen] = useAtom(menuIsOpen);
  const router = useRouter();
  const { query } = router;

  const [searchValue, setSearchValue] = useAtom(searchString);
  const [searchIsOpen, setSearchIsOpen] = React.useState(false);

  const [_, fetchCategories] = useAtom(fetchCategoryData);
  const [categoriesState] = useAtom(categories);
  const [categoriesLoadingState] = useAtom(categoriesLoading);

  React.useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <header className="flex-middle pad-sm">
        <div className="col-2">
          <div className="logobox">
            <img src="/logo.svg" />
          </div>
        </div>
        <div className="col-6">
          <div className="input-end">
            <input
              id="searchbox"
              placeholder="Search"
              value={searchValue}
              onFocus={() => setSearchIsOpen(true)}
              onBlur={() => setSearchIsOpen(false)}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button className="primary">
              <ion-icon className="dark" name="search" />
            </button>
          </div>
          <div
            id="search-overlay"
            className={`shadow-lg pad-xs ${
              searchValue.length > 1 && searchIsOpen ? "active" : ""
            }`}
          >
            <a color="dark" href="#!">
              <div className="list-result flex-middle pad-xs">
                <img
                  className="mr-sm"
                  style={{ maxWidth: 56 }}
                  src="https://images-na.ssl-images-amazon.com/images/I/81EYgXB%2BGOL._AC_SX679_.jpg"
                />
                <p className="dark">
                  KitchenAid KSM150PSER Artisan 5-Quart Stand Mixer, Empire Red
                </p>
              </div>
            </a>

            <a href="#!">
              <div className="list-result center pad-xs dark">
                <strong>
                  View 22 More Results <ion-icon name="arrow-forward-outline" />
                </strong>
              </div>
            </a>
          </div>
          <div
            id="search-overlay-bg"
            className={`${
              searchValue.length > 1 && searchIsOpen ? "active" : ""
            }`}
          />
        </div>
        <HeaderControls />
      </header>
      <div id="subheader" className="pad-xs">
        <button
          className="btn-reset"
          onClick={() => setMenuOpen((status) => !status)}
        >
          <span id="menu-filters" className="hidden-desktop sub-nav strong sm">
            <ion-icon name="menu" /> Menu
          </span>
        </button>
        {categoriesState.length &&
          categoriesState
            .slice(0, NUM_DISPLAYED_CATEGORIES)
            .map((category, index) => {
              const active = query.category === category.name;
              return (
                <Link href={`/category/${category.name}`} key={index}>
                  <a>
                    <span
                      className={`sub-nav strong sm ${active ? "active" : ""}`}
                    >
                      {category.display_name}
                    </span>
                  </a>
                </Link>
              );
            })}
      </div>
    </>
  );
};

export default Header;
