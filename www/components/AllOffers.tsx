import { useAtom } from "jotai";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { searchState } from "../state/FilterState";
import { useTypedQuery } from "../utils/gql-zeus-query-hooks";
import Offer from "./Offer";

const AllOffers = () => {
  const [search] = useAtom(searchState);
  const router = useRouter();

  const page: number = Number(router.query.page) || 1;
  const numItemsPerPage: number = Number(router.query.numItemsPerPage) || 12;

  function goToPage(page: number) {
    router.push({ pathname: "./", query: { page } });
  }

  const { data, error, loading } = useTypedQuery({
    product: [
      {
        limit: numItemsPerPage,
        ...(page > 1 && { offset: page * numItemsPerPage }),
        where: {
          name: {
            _ilike: `%${search.searchString}%` || null,
          },
          category: {
            name: {
              _eq: search.category,
            },
          },
          price: {
            _is_null: false,
            _gte: Number(0),
            _lte: Number(1000),
          },
          ...(search.selectedBrands?.length && {
            brand: { _in: search.selectedBrands },
          }),
        },
      },
      {
        id: true,
        name: true,
        description: true,
        price: true,
        image_urls: [{}, true],
        brand: true,
      },
    ],
  });

  const PageNavigationButtons = () => {
    const staticPreviousPage = (
      <button onClick={() => goToPage(page - 1)}>
        <ion-icon name="arrow-back-outline" />
        Previous{" "}
      </button>
    );

    const previousPage = (
      <button onClick={() => goToPage(page - 1)}>{page - 1}</button>
    );

    const currentPage = <button className="blank disabled">{page}</button>;

    const nextPage = (
      <button onClick={() => goToPage(page + 1)}>{page + 1}</button>
    );

    const staticNextPage = (
      <button onClick={() => goToPage(page + 1)}>
        Next <ion-icon name="arrow-forward-outline" />
      </button>
    );

    return (
      <div className="center mb-md">
        {[
          staticPreviousPage,
          previousPage,
          currentPage,
          nextPage,
          staticNextPage,
        ]}
      </div>
    );
  };

  return (
    <div className="container">
      <h2>Best Sellers</h2>
      <p className="mb-md muted">Best sellers from around the web.</p>
      <div className="shadow card mb-md">
        <div className="flex offers">
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error.message}</p>}
          {data?.product?.map((product, index) => (
            <Link key={index} href={`/products/${product.id}`}>
              <a className="flex-col border offer col-3 pad-md">
                <Offer product={product} rating={3} reviews={"1,100"} />
              </a>
            </Link>
          ))}
        </div>
      </div>
      <PageNavigationButtons />
    </div>
  );
};

export default AllOffers;
