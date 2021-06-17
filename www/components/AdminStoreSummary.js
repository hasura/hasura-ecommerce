import * as React from "react";
import crossfilter from "crossfilter2";
import AdminChart from "./AdminChart";
import { useTypedSubscription } from "../utils/gql-zeus-query-hooks";

const AdminStoreSummary = () => {
  const [today, setToday] = React.useState(new Date());
  const [timeSlice, setTimeSlice] = React.useState(14);
  const [analysis, setAnalysis] = React.useState(null);
  const [total, setTotal] = React.useState(0);
  const [totalOrders, setTotalOrders] = React.useState(0);
  const [totalUsers, setTotalUsers] = React.useState(0);

  const range = [];

  for (let day = 1; day <= timeSlice; day++) {
    const payload = {};
    const d = new Date();
    const h = new Date(d.setDate(today.getDate() - day));
    payload.created_at = h.toISOString();
    payload.products = [];
    payload.user_id = null;
    range.push(payload);
  }

  const created_at_filter = {
    created_at: {
      _gt: "2021-02-05T10:19:14.054Z",
    },
  };

  const { data, error, loading } = useTypedSubscription({
    order: [
      {
        order_by: [{ created_at: "desc" }],
        where: {
          ...created_at_filter,
          products: {
            product: {
              name: {
                _is_null: false,
              },
            },
          },
        },
      },
      {
        created_at: true,
        user_id: true,
        products: {
          product: {
            price: true,
          },
        },
      },
    ],
  });

  React.useEffect(() => {
    const sumProducts = (products) =>
      products.length
        ? products.reduce((b, { product }) => b + product.price, 0)
        : 0;

    function reduceAdd(p, v, nf) {
      const d = new Date(v.created_at);
      const total = sumProducts(v.products);
      p.total += total;
      p.date = d.toLocaleDateString();
      return p;
    }

    function reduceRemove(p, v, nf) {
      const total = sumProducts(v.products);
      p.total -= total;
      p.date = p.date;
      return p;
    }

    function reduceInitial() {
      return { date: "", total: 0 };
    }

    function orderValue(p) {
      return p.date;
    }

    if (data) {
      const cf = crossfilter([...data.order, ...range]);

      const paymentsByDay = cf.dimension((input) => {
        let d = new Date(input.created_at);
        return d.toLocaleDateString();
      });

      const allUsers = cf.dimension((input) => {
        return input.user_id;
      });

      const totalsByUser = allUsers
        .group()
        .reduce(reduceAdd, reduceRemove, reduceInitial)
        .top(Infinity);

      const grandTotal = paymentsByDay
        .groupAll()
        .reduceSum((d) => sumProducts(d.products));
      setTotal(grandTotal.value().toFixed(2));

      setTotalUsers(
        totalsByUser.filter((n) => {
          if (n.key) return n;
        }).length
      );

      setTotalOrders(
        totalsByUser.filter((n) => {
          if (n.key && n.value.total > 0) return n;
        }).length
      );

      const totalsByDay = paymentsByDay
        .group()
        .reduce(reduceAdd, reduceRemove, reduceInitial)
        .order(orderValue);
      setAnalysis(totalsByDay.top(timeSlice));
    }
  }, [data]);

  return (
    <React.Fragment>
      <div className="mb-sm">
        <h2>Store Summary</h2>
        <p className="muted">Last 2 Weeks</p>
      </div>
      <div className="row mb-lg">
        {analysis && <AdminChart data={analysis} />}
        <div className="col-4 pl-xs">
          <div className="shadow card">
            <div className="flex">
              <div className="flex-col border pad-sm">
                <p className>Sales</p>
                <h2>{`$ ${total}`}</h2>
              </div>
            </div>
            <div className="flex">
              <div className="flex-col border pad-sm">
                <p className>Orders</p>
                <h2>{totalOrders}</h2>
              </div>
              <div className="flex-col border pad-sm">
                <p className>Customers</p>
                <h2>{totalUsers}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdminStoreSummary;
