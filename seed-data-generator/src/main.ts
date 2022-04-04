import faker from "faker";

import { Chain, order_insert_input, user } from "./graphql-client-sdk-node";
import type {
  product,
  order_product_insert_input,
} from "./graphql-client-sdk-node";

// TODO: This script should probably just be able to generate data for all of the core tables

///////////////////////////////////////////////////////////

const NUM_ORDERS_PER_USER = 5;
const NUM_PRODUCTS_PER_ORDER_MIN = 1;
const NUM_PRODUCTS_PER_ORDER_MAX = 5;

const client = Chain("http://localhost:8080/v1/graphql", {
  headers: { "X-Hasura-Admin-Secret": "my-secret" },
});

///////////////////////////////////////////////////////////

async function main() {
  const productsQuery = await client.query({
    product: [{}, { id: true }],
  });

  const userQuery = await client.query({
    user: [
      {},
      {
        id: true,
        addresses: [{}, { id: true }],
      },
    ],
  });

  const orderData = userQuery.user.flatMap((user) => {
    return generateOrdersForUser({
      user: user as any,
      amount: NUM_ORDERS_PER_USER,
      products: productsQuery.product,
    });
  });

  // Batch it into inserts of 100
  for (const orderDataBatch of chunk(orderData, 100)) {
    console.count("Inserting 100 orders");
    await client.mutation({
      insert_order: [{ objects: orderDataBatch }, { affected_rows: true }],
    });
  }
}

main().catch(console.log);

///////////////////////////////////////////////////////////

const chunk = (array, size) =>
  Array.from({ length: Math.ceil(array.length / size) }, (_, index) =>
    array.slice(index * size, index * size + size)
  );

function generateOrderProductData({
  amount,
  products,
}: {
  amount: number;
  products: Pick<product, "id">[];
}): order_product_insert_input[] {
  return Array.from({ length: amount }, () => ({
    product_id: faker.random.arrayElement(products.map((it) => it.id)),
    quantity: faker.random.number(5),
  }));
}

function generateOrdersForUser({
  amount,
  user,
  products,
}: {
  amount: number;
  user: Pick<user, "id" | "addresses">;
  products: Pick<product, "id">[];
}): order_insert_input[] {
  return Array.from({ length: amount }, () => ({
    user_id: user.id,
    billing_address_id: faker.random.arrayElement(
      user.addresses.map((it) => it.id)
    ),
    shipping_address_id: faker.random.arrayElement(
      user.addresses.map((it) => it.id)
    ),
    products: {
      data: generateOrderProductData({
        products,
        amount: faker.random.number({
          min: NUM_PRODUCTS_PER_ORDER_MIN,
          max: NUM_PRODUCTS_PER_ORDER_MAX,
        }),
      }),
    },
  }));
}
