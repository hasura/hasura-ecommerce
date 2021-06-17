import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import LayoutAdmin from "../../components/LayoutAdmin";
import { useTypedQuery } from "../../utils/gql-zeus-query-hooks";

const AdminOrders = ({ orders = [] }) => {
  const [customerName, setCustomerName] = React.useState("");
  const [purchaseDate, setPurchaseDate] = React.useState("");
  const [productID, setProductID] = React.useState("");
  const [productName, setProductName] = React.useState("");
  const [priceHigh, setPriceHigh] = React.useState("");
  const [priceLow, setPriceLow] = React.useState("");
  const [orderIDs, setOrderIDs] = React.useState(orders.map(Number));

  const handleIDChange = (e) => {
    if (e.target.value === "") {
      setOrderIDs([]);
    } else {
      const input = e.target.value;
      const data = input
        .trim()
        .replace(/[a-z;'/.!@#$%^]/g, "")
        .split(",")
        .map(Number);
      setOrderIDs(data);
    }
  };

  const handler = (stateSetter) => (e) => {
    stateSetter(e.target.value);
  };

  const { data, error, loading } = useTypedQuery({
    order: [
      {
        limit: 12,
        where: {
          ...(productName && {
            products: {
              product: {
                name: {
                  _ilike: `%${productName}%`,
                },
              },
            },
          }),
          ...(customerName && {
            user: {
              name: {
                _ilike: `%${customerName}%`,
              },
            },
          }),
          ...((priceHigh || priceLow) && {
            order_total: {
              ...(priceHigh && {
                _lte: priceHigh,
              }),
              ...(priceLow && {
                _gte: priceLow,
              }),
            },
          }),
          ...(orderIDs.length && {
            id: {
              _in: orderIDs,
            },
          }),
        },
      },
      {
        id: true,
        order_total: true,
        created_at: true,
        user: {
          id: true,
          name: true,
        },
        products: [
          {},
          {
            product: {
              id: true,
              name: true,
            },
          },
        ],
      },
    ],
  });

  return (
    <React.Fragment>
      <Head>
        <title>Customers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="left-sidebar" className="pad-sm">
        <label className="mb-xxs">ID</label>
        <input
          className="mb-sm w-100"
          type="string"
          placeholder="ID..."
          value={orderIDs}
          onChange={handleIDChange}
        />
        <hr className="mb-xs" />
        <label className="mb-xxs">Customer Name</label>
        <input
          className="mb-sm w-100"
          type="string"
          value={customerName}
          onChange={handler(setCustomerName)}
          placeholder="Customer Name..."
        />
        <hr className="mb-xs" />
        <label className="mb-xxs">Purchase Date</label>
        <input
          className="mb-sm w-100"
          type="date"
          placeholder="Purchase Date..."
          value={purchaseDate}
          onChange={handler(setPurchaseDate)}
        />
        <label className="mb-xxs">Product ID</label>
        <input
          className="mb-sm w-100"
          type="number"
          onChange={handler(setProductID)}
          value={productID}
          placeholder="Product ID..."
        />
        <label className="mb-xxs">Product Name</label>
        <input
          className="mb-sm w-100"
          placeholder="Product Name..."
          onChange={handler(setProductName)}
          value={productName}
        />
        <hr className="mb-xs" />
        <label className="mb-xxs">Price Range</label>
        <div className="input-start blank mb-xs w-100">
          <span>$</span>
          <input
            type="number"
            placeholder="From..."
            onChange={handler(setPriceLow)}
            value={priceLow}
          />
        </div>
        <div className="input-start blank mb-sm w-100">
          <span>$</span>
          <input
            type="number"
            placeholder="To..."
            value={priceHigh}
            onChange={handler(setPriceHigh)}
          />
        </div>
      </div>

      <div id="left-sidebar-bg" />
      <section className="content sidebar pad-xl">
        <div className="container">
          <div className="flex-middle mb-md">
            <button id="menu-filters" className="blank mr-xs hidden-desktop">
              <ion-icon name="menu" />
            </button>
            <h2>Orders</h2>
          </div>
          <div className="shadow card overflow-x mb-md">
            <table className="grid iso">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Customer ID</th>
                  <th>Customer Name</th>
                  <th>Products</th>
                  <th>Date</th>
                  <th className="right">Price</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {loading && <tr colSpan={7}>Searching…</tr>}
                {data?.order?.length === 0 && (
                  <tr colSpan={7}>No Results Found…</tr>
                )}
                {data?.order.map((o, i) => {
                  const { id, created_at, user, products, order_total } = o;
                  const date = new Date(created_at);

                  return (
                    <tr key={i}>
                      <td>{id}</td>
                      <td>
                        <a href="#!">{user.id}</a>
                      </td>
                      <td>{user.name}</td>
                      <td>
                        <ul>
                          {products.map((product, i) => (
                            <li key={i}>{product.product.name}</li>
                          ))}
                        </ul>
                      </td>
                      <td>{date.toLocaleDateString()}</td>
                      <td className="right">{`$${order_total}`}</td>
                      <td>
                        <Link
                          href={{
                            pathname: "/admin/products",
                            query: {
                              id: products.map((product) => product.product.id),
                            },
                          }}
                        >
                          <a>
                            View Products{" "}
                            <ion-icon name="arrow-forward-outline" />
                          </a>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="center mb-md">
            <button>
              <ion-icon name="arrow-back-outline" /> Previous
            </button>{" "}
            <button>1</button> <button className="blank disabled">2</button>{" "}
            <button>3</button> ... <button>299</button>{" "}
            <button>
              Next <ion-icon name="arrow-forward-outline" />
            </button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export function getServerSideProps(context) {
  const { orders } = context.query;
  let orderSet = [];
  if (typeof orders === "string") {
    orderSet = [orders];
  }
  if (typeof orders === "object") {
    orderSet = [...orders];
  }

  return {
    props: {
      orders: orderSet,
    },
  };
}

AdminOrders.Layout = LayoutAdmin;

export default AdminOrders;
