import * as React from "react";
import Link from "next/link";
import { useTypedSubscription } from "../utils/gql-zeus-query-hooks";

const NewOrders = () => {
  const { data, error, loading } = useTypedSubscription({
    order: [
      {
        limit: 12,
        where: {
          products: {
            product: {
              name: {
                _is_null: false,
              },
            },
          },
          created_at: {
            _gte: "2021-01-16 16:00:00 UTC",
          },
        },
      },
      {
        id: true,
        created_at: true,
        products: [
          {},
          {
            product: {
              id: true,
              name: true,
              price: true,
            },
          },
        ],
        user: {
          id: true,
          name: true,
        },
      },
    ],
  });

  return (
    <React.Fragment>
      <div className="flex-middle mb-sm">
        <h2>Recent Orders</h2>
        <button className="flex-pull-right default">
          View Orders <ion-icon name="arrow-forward-outline" />
        </button>
      </div>
      <div className="shadow card mb-lg">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
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
            {data &&
              data.order &&
              data.order.map((order, index) => {
                const { products, user, id, created_at } = order;
                const date = new Date(created_at);
                const formatted = date.toLocaleDateString();

                const price = products.reduce((collector, current) => {
                  return collector + current.product.price;
                }, 0);
                return (
                  <tr key={index}>
                    <td>{id}</td>
                    <td>
                      <a href="#!">{user?.id}</a>
                    </td>
                    <td>{user?.name}</td>
                    <td>
                      {products &&
                        products.map(({ product }, index) => (
                          <li key={index}>{product.name}</li>
                        ))}
                    </td>
                    <td>{formatted}</td>
                    <td className="right">${price.toFixed(2)}</td>
                    <td>
                      <Link
                        href={{
                          pathname: "/admin/products",
                          query: {
                            products: products.map(({ product }) => product.id),
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
    </React.Fragment>
  );
};

export default NewOrders;
