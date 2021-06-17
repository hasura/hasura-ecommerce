import * as React from "react";
import { product_select_column } from "../utils/generated/graphql-client-sdk";
import { useTypedQuery } from "../utils/gql-zeus-query-hooks";
import OfferSimilar from "./OfferSimilar";

const ProductSimilar = ({ category }) => {
  const { data, loading, error } = useTypedQuery({
    product: [
      {
        distinct_on: [product_select_column.name],
        where: { category: { name: { _eq: category } } },
        limit: 4,
      },
      {
        id: true,
        name: true,
        price: true,
        image_urls: [{}, true],
      },
    ],
  });

  return (
    <React.Fragment>
      {loading && <p>Loading…</p>}
      {!loading &&
        data?.product?.map((el, index) => (
          <OfferSimilar
            id={el.id}
            price={el.price}
            image={el.image_urls[0]}
            name={el.name}
            key={index}
          />
        ))}
    </React.Fragment>
  );
};

export default ProductSimilar;
