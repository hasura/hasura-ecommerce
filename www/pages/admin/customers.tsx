import * as React from "react";
import Head from "next/head";
import LayoutAdmin from "../../components/LayoutAdmin";
import { useTypedQuery } from "../../utils/gql-zeus-query-hooks";
import { order_by, user } from "../../utils/generated/graphql-client-sdk";

function CustomerRow({ customer }: { customer: user }) {
  return (
    <tr>
      <td>{customer.id}</td>
      <td>{customer.name}</td>
      <td>{customer.email}</td>
      <td>{customer.addresses[0]?.city || "N/A"}</td>
      <td>{customer.addresses[0]?.state || "N/A"}</td>
      <td>{customer.addresses[0]?.address_line_one || "N/A"}</td>
      <td />
      <td>{customer.addresses[0]?.zipcode || "N/A"}</td>
      <td>{new Date(customer.created_at).toLocaleDateString()}</td>
      <td>
        {customer.orders[0]?.created_at
          ? new Date(customer.orders[0]?.created_at).toLocaleDateString()
          : "N/A"}
      </td>
      <td>
        <a href="#!">
          View Orders <ion-icon name="arrow-forward-outline" />
        </a>
      </td>
    </tr>
  );
}

const AdminCustomers = () => {
  const { data, loading, error } = useTypedQuery({
    user: [
      {},
      {
        id: true,
        name: true,
        email: true,
        created_at: true,
        orders: [
          {
            limit: 1,
            order_by: [
              {
                created_at: order_by.desc,
              },
            ],
          },
          {
            id: true,
            created_at: true,
          },
        ],
        addresses: [
          {
            limit: 1,
          },
          {
            address_line_one: true,
            address_line_two: true,
            city: true,
            state: true,
            zipcode: true,
          },
        ],
      },
    ],
  });

  const Content = ({ children }) => (
    <React.Fragment>
      <Head>
        <title>Customers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </React.Fragment>
  );

  if (loading) {
    return (
      <Content>
        <p>Loading</p>
      </Content>
    );
  }

  if (error) {
    return (
      <Content>
        <pre>Error: {error.message}</pre>
      </Content>
    );
  }

  return (
    <Content>
      <div id="left-sidebar" className="pad-sm">
        <label className="mb-xxs">ID</label>
        <input className="mb-sm w-100" type="number" placeholder="ID..." />
        <label className="mb-xxs">Customer Name</label>
        <input className="mb-sm w-100" placeholder="Customer Name..." />
        <label className="mb-xxs">Joined Date</label>
        <input
          className="mb-sm w-100"
          type="date"
          placeholder="Joined Date..."
        />
        <hr className="mb-xs" />
        <label className="mb-xxs">City</label>
        <input className="mb-sm w-100" placeholder="City..." />
        <label className="mb-xxs">State</label>
        <input className="mb-sm w-100" placeholder="State..." />
        <label className="mb-xxs">Zip Code</label>
        <input className="mb-sm w-100" placeholder="Zip Code..." />
        <label className="mb-xxs">Address</label>
        <input className="mb-sm w-100" placeholder="Address..." />
        <hr className="mb-xs" />
        <label className="mb-xxs">Order ID</label>
        <input
          className="mb-sm w-100"
          type="number"
          placeholder="Order ID..."
        />
        <label className="mb-xxs">Last Purchase</label>
        <input
          className="mb-sm w-100"
          type="date"
          placeholder="Last Purchase..."
        />
      </div>
      <div id="left-sidebar-bg" />
      <section className="content sidebar pad-xl">
        <div className="container">
          <div className="flex-middle mb-md">
            <button id="menu-filters" className="blank mr-xs hidden-desktop">
              <ion-icon name="menu" />
            </button>
            <h2>Customers</h2>
          </div>
          <div className="card overflow-x shadow mb-md">
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
              <tbody>
                {data?.user?.map((user) => (
                  <CustomerRow customer={user as any} />
                ))}
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
    </Content>
  );
};

AdminCustomers.Layout = LayoutAdmin;

export default AdminCustomers;
