import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import LayoutAdmin from "../../components/LayoutAdmin";
import { useTypedQuery } from "../../utils/gql-zeus-query-hooks";

const AdminProducts = (props) => {
  const router = useRouter();

  const rawProductIds = router.query["id"];

  const _productIds = Array.isArray(rawProductIds)
    ? rawProductIds.map(Number)
    : [Number(rawProductIds)];

  const [productIDs, setProductIDs] = React.useState(
    router.query["id"] ? _productIds : []
  );

  const [productIDString, setProductIDString] = React.useState(
    productIDs.join(",")
  );

  const [productName, setProductName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [priceHigh, setPriceHigh] = React.useState(null);
  const [priceLow, setPriceLow] = React.useState(null);

  const handleIDChange = (e) => {
    if (e.target.value === "") {
      setProductIDs([]);
      setProductIDString("");
    } else {
      const input: string = e.target.value;
      setProductIDString(input);

      const data = input
        .trim()
        .replace(/[a-z;'/.!@#$%^]/g, "")
        .split(",")
        .map(Number);
      setProductIDs(data);
    }
  };

  const { data, error, loading } = useTypedQuery({
    product: [
      {
        limit: 12,
        where: {
          ...(productIDs.length && {
            id: {
              _in: productIDs,
            },
          }),
          ...(productName && {
            name: {
              _ilike: `%${productName}%`,
            },
          }),
          ...(description && {
            description: {
              _ilike: `%${description}%`,
            },
          }),
          ...((priceHigh || priceLow) && {
            price: {
              ...(priceHigh && {
                _lte: priceHigh,
              }),
              ...(priceLow && {
                _gte: priceLow,
              }),
            },
          }),
        },
      },
      {
        id: true,
        image_urls: [{}, true],
        name: true,
        description: true,
        price: true,
        orders: [{}, { id: true }],
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
          onChange={handleIDChange}
          value={productIDString}
        />
        <label className="mb-xxs">Product Name</label>
        <input
          className="mb-sm w-100"
          placeholder="Product Name..."
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <label className="mb-xxs">Product Description</label>
        <input
          className="mb-sm w-100"
          placeholder="Product Description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <hr className="mb-xs" />
        <label className="mb-xxs">Price Range</label>
        <div className="input-start blank mb-xs w-100">
          <span>$</span>
          <input
            type="number"
            placeholder="From..."
            value={priceLow}
            onChange={(e) => setPriceLow(e.target.value)}
          />
        </div>
        <div className="input-start blank mb-xs w-100">
          <span>$</span>
          <input
            type="number"
            placeholder="To..."
            value={priceHigh}
            onChange={(e) => setPriceHigh(e.target.value)}
          />
        </div>
        <div className="checkbox mb-xxs">
          <input type="checkbox" id="brand1" name="checkboxes-card" />
          <label htmlFor="brand1">On Sale</label>
        </div>
      </div>

      <div id="left-sidebar-bg" />
      <section className="content sidebar pad-xl">
        <div className="container">
          <div className="flex-middle mb-md">
            <button id="menu-filters" className="blank mr-xs hidden-desktop">
              <ion-icon name="menu" />
            </button>
            <h2>Products</h2>
            <a href="/admin/add-product" className="primary flex-pull-right">
              <ion-icon name="add-circle-outline" /> Add Product
            </a>
          </div>
          <div className="shadow card overflow-x mb-md">
            <table className="grid iso">
              <thead>
                <tr>
                  <th>ID</th>
                  <th />
                  <th>Product Name</th>
                  <th className="right">Price</th>
                  <th className="right">Sale Price</th>
                  <th className="right">Save</th>
                  <th>Orders</th>
                </tr>
              </thead>
              <tbody>
                {loading && <tr colSpan={7}>Searching…</tr>}
                {!loading && data?.product.length === 0 && (
                  <tr colSpan={7}>No Results Found…</tr>
                )}
                {!loading &&
                  data &&
                  data.product.map((p, i) => {
                    const { price, id, name, description, orders, image_urls } =
                      p;
                    return (
                      <tr key={i}>
                        <td>{id}</td>
                        <td>
                          <img style={{ width: 80 }} src={image_urls[0]} />
                        </td>
                        <td>
                          <p className="strong">{name}</p>
                          <p>{description && description.slice(0, 50)}…</p>
                        </td>
                        <td className="right">{`$${price.toFixed(2)}`}</td>
                        <td className="right">{`$${price.toFixed(2)}`}</td>
                        <td className="right">$0</td>
                        <td>
                          {orders.length && (
                            <Link
                              href={{
                                pathname: "/admin/orders",
                                query: {
                                  orders: orders.map((order) => order.id),
                                },
                              }}
                            >
                              <a>
                                View Orders{" "}
                                <ion-icon name="arrow-forward-outline" />
                              </a>
                            </Link>
                          )}
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

AdminProducts.Layout = LayoutAdmin;

export default AdminProducts;
