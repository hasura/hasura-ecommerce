import * as React from "react";
import { useTypedSubscription } from "../utils/gql-zeus-query-hooks";

const NewCustomers = () => {
  const { data, error, loading } = useTypedSubscription({
    user: [
      {
        limit: 12,
        where: {
          addresses: {
            address_line_one: {
              _is_null: false,
            },
          },
          created_at: {
            _gte: "2021-01-16 16:00:00 UTC",
          },
        },
      },
      {
        id: true,
        name: true,
        email: true,
        created_at: true,
        orders: [
          {
            limit: 1,
          },
          {
            created_at: true,
          },
        ],
        addresses: [
          {
            limit: 1,
          },
          {
            city: true,
            state: true,
            address_line_one: true,
            address_line_two: true,
            zipcode: true,
            created_at: true,
          },
        ],
      },
    ],
  });

  return (
    <React.Fragment>
      <div className="flex-middle mb-sm">
        <h2>Recent Customers</h2>
        <button className="flex-pull-right default">
          View Customers <ion-icon name="arrow-forward-outline" />
        </button>
      </div>
      <div className="shadow card mb-lg">
        <table className="grid iso">
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer Name</th>
              <th>Email</th>
              <th>City</th>
              <th>State</th>
              <th>Address 1</th>
              <th>Address 2</th>
              <th>Zip Code</th>
              <th>Joined Date</th>
              <th>Last Purchase</th>
              <th>Orders</th>
            </tr>
          </thead>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error.message}</p>}
          {data && data.user && (
            <tbody>
              {data.user.map((user, index) => {
                const { orders, addresses, id, name, email, created_at } = user;
                const address = addresses.length ? addresses[0] : {};
                const {
                  city = "--",
                  state = "--",
                  address_line_one = "",
                  address_line_two = "--",
                  zipcode = "--",
                } = address;

                const order = orders.length ? orders[0] : {};
                const { created_at: created_at_order = "--" } = order;

                const joined = new Date(created_at);
                const joinedFormatted = joined.toLocaleDateString();

                const lastPurchase = new Date(created_at_order);
                const lastPurchaseformatted = joined.toLocaleDateString();

                return (
                  <tr key={index}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{city}</td>
                    <td>{state}</td>
                    <td>{address_line_one}</td>
                    <td>{address_line_two}</td>
                    <td>{zipcode}</td>
                    <td>{joinedFormatted}</td>
                    <td>{lastPurchaseformatted}</td>
                    <td>
                      <a href="#!">
                        View Orders <ion-icon name="arrow-forward-outline" />
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>
      </div>
    </React.Fragment>
  );
};

export default NewCustomers;
