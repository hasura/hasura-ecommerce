import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const HeaderAdmin = () => {
  const router = useRouter();

  const nav = [
    {
      label: "Summary",
      path: "/admin",
    },
    {
      label: "Customers",
      path: "/admin/customers",
    },
    {
      label: "Orders",
      path: "/admin/orders",
    },
    {
      label: "Products",
      path: "/admin/products",
    },
    // {
    //   label: "Discounts",
    //   path: "/admin/discounts",
    // },
  ];

  return (
    <React.Fragment>
      <header className="flex-middle pad-sm">
        <div className="logobox mr-sm">
          <img src="/logo.svg" />
        </div>
        <a id="menu-btn" href="#!">
          <span className="hidden-desktop header-nav mr-xs">
            <ion-icon name="menu-outline" /> Menu
          </span>
        </a>
        {nav.map((n, i) => {
          const active = router.pathname === n.path;
          return (
            <Link href={n.path}>
              <a>
                <span
                  className={`hidden-tablet header-nav mr-xs ${
                    active ? "active" : ""
                  }`}
                >
                  {n.label}
                </span>
              </a>
            </Link>
          );
        })}
        <a className="flex-pull-right" href="/">
          <span className="header-nav">
            <ion-icon name="storefront-outline" /> Back to Store
          </span>
        </a>
      </header>
      <div id="menu-overlay" className="shadow-lg pad-xs">
        {nav.map((n, i) => {
          const active = router.pathname === n.path;
          return (
            <a color="dark" href={n.path}>
              <div className="list-result flex-middle pad-xs">
                <p className="dark">{n.label}</p>
              </div>
            </a>
          );
        })}
      </div>
      <div id="menu-overlay-bg" className="" />
    </React.Fragment>
  );
};

export default HeaderAdmin;
