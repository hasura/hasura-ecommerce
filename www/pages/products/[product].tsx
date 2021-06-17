import { useAtom } from "jotai";
import Head from "next/head";
import * as React from "react";
import { Fragment } from "react";
import LayoutProduct from "../../components/LayoutProduct";
import OffersSimilar from "../../components/OffersSimilar";
import QuantitySelect from "../../components/QuantitySelect";
import Rating from "../../components/Rating";
import Review from "../../components/Review";
import ReviewSummary from "../../components/ReviewSummary";
// Global State
import { cart } from "../../state/CartState";
import { useStoreState } from "../../store";
// Server side Imports
import { client } from "../../utils/generated/client";
import {
  order_by,
  product_review_select_column,
} from "../../utils/generated/graphql-client-sdk";
import { $, useTypedMutation } from "../../utils/gql-zeus-query-hooks";

interface ReviewModalProps {
  visible: boolean;
  submitReviewHandler: (Event) => Promise<any> | ((Event) => any);
  toggleModalHandler: () => void;
}

function ReviewModal(props: ReviewModalProps) {
  // Very hacky modal
  return (
    <section
      id="modal-backdrop"
      style={
        props.visible
          ? {
              zIndex: 100,
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, .85)",
            }
          : {
              display: "none",
            }
      }
    >
      <div
        className="container small"
        style={
          props.visible
            ? {
                zIndex: 200,
                marginTop: "30vh",
              }
            : {
                display: "none",
              }
        }
      >
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            <h2 className="mb-sm">Review</h2>
            <div className="shadow card pad-sm mb-sm">
              <form onSubmit={props.submitReviewHandler}>
                <p className="strong mb-xxs">Rating</p>
                <select
                  id="rating"
                  name="rating"
                  required={true}
                  style={{ width: 40 }}
                >
                  {[1, 2, 3, 4, 5].map((it) => (
                    <option value={it}>{it}</option>
                  ))}
                </select>

                <p className="strong mb-xxs">Review</p>
                <textarea
                  id="review"
                  name="review"
                  className="w-100 mb-xs"
                  required={true}
                  placeholder="Leave your review here..."
                />

                <button
                  value="submit"
                  type="submit"
                  className={`primary mb-xs w-100`}
                >
                  Submit Review
                </button>
                <button
                  className="default w-100"
                  onClick={props.toggleModalHandler}
                >
                  <ion-icon name="arrow-back-outline" />
                  Back to Product
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Product(props) {
  const [quantity, setQuantity] = React.useState(1);
  const [cartState, setCartState] = useAtom(cart);
  const [currentImage, setCurrentImage] = React.useState(0);
  const [modalVisible, setModalVisible] = React.useState(false);
  const userId = useStoreState((state) => state.user?.id);

  const {
    name,
    id,
    image_urls,
    description,
    price,
    brand,
    category,
    product_reviews,
  } = props;

  const [dollars, cents] = `${price}`.split(".");

  const [insertProductReview] = useTypedMutation({
    insert_product_review_one: [
      {
        object: {
          product_id: $`product_id`,
          comment: $`comment`,
          rating: $`rating`,
          user_id: $`user_id`,
        },
      },
      {
        id: true,
      },
    ],
  });

  async function submitReviewHandler(e: Event) {
    e.preventDefault();
    const data = new FormData(e.target as any);

    const result = await insertProductReview({
      variables: {
        product_id: id,
        comment: data.get("review"),
        rating: Number(data.get("rating")),
        user_id: 502,
      },
    });
  }

  return (
    <Fragment>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <section className="content header pad-xl">
          <ReviewModal
            visible={modalVisible}
            toggleModalHandler={() => setModalVisible(!modalVisible)}
            submitReviewHandler={submitReviewHandler}
          />
          <div className="container">
            <div className="row mb-sm">
              <div className="col-3">
                <img className="w-100 mb-sm" src={image_urls[currentImage]} />
                <div>
                  {image_urls.map((el, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className="col-3 mr-sm"
                      >
                        <img className="w-100 mb-sm" src={image_urls[index]} />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-1" />
              <div className="col-5 mb-sm">
                <h2 className="mb-xxs">{name}</h2>
                <a href="#!">
                  <p className="mb-xxs">in {category?.display_name}</p>
                </a>
                <div className="mb-sm">
                  <Rating rating={props.reviewSummary.averageRating} />
                  <ion-icon class="muted" name="star-outline" />{" "}
                  <span className="muted">
                    {props.reviewSummary.totalRatings}
                  </span>
                </div>
                <hr className="mb-xs" />

                <h2>
                  {`$${dollars}`}
                  <span className="sm">
                    .{(cents ? cents + "0" : "00").slice(0, 2)}
                  </span>
                </h2>

                <hr />
                <table>
                  <tbody>
                    <tr>
                      <td className="strong">Brand</td>
                      <td>{brand}</td>
                    </tr>
                    <tr>
                      <td className="strong">Product Number</td>
                      <td>{id}</td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <strong>Description</strong>
                        <br />
                        <br />
                        {description}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-1" />
              <div className="col-2">
                <div className="card mb-sm pad-sm">
                  <h2>
                    {`$${dollars}`}
                    <span className="sm">
                      .{(cents ? cents + "0" : "00").slice(0, 2)}
                    </span>
                  </h2>
                  <p className="mb-sm">
                    <strong>Free</strong> one-day shipping
                  </p>
                  <p className="mb-xxs strong">Quantity</p>
                  <div className="dropdown mb-sm">
                    <QuantitySelect selected={quantity} onChange={setQuantity}>
                      {[1, 2, 3, 4]}
                    </QuantitySelect>
                  </div>
                  <button
                    className="primary w-100"
                    onClick={() => {
                      setCartState((currItems) => [
                        ...currItems,
                        {
                          ...props,
                          image: image_urls[currentImage],
                          quantity,
                        },
                      ]);
                    }}
                  >
                    <ion-icon name="cart-outline" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="row mb-md">
              <hr className="mb-sm" />
              <h2 className="mb-sm muted">More Like This...</h2>
              <div className="card">
                <div className="flex flex-wrap">
                  <OffersSimilar category={category.name} />
                </div>
              </div>
            </div>
            <div className="row">
              <hr className="mb-sm" />
              <ReviewSummary
                toggleModalHandler={() => setModalVisible(!modalVisible)}
                averageRating={props.reviewSummary.averageRating}
                ratingPercentages={props.reviewSummary.ratingPercentages}
              />
              <div className="col-1"></div>
              <div className="col-5">
                <h3 className="mb-sm">Top Reviews</h3>
                {product_reviews.map((review) => {
                  return <Review key={review.id} review={review} />;
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const { product } = context.params;

  const { product_by_pk } = await client.query({
    product_by_pk: [
      {
        id: product,
      },
      {
        id: true,
        name: true,
        description: true,
        price: true,
        image_urls: [{}, true],
        brand: true,

        category: {
          name: true,
          display_name: true,
        },

        product_reviews: [
          { limit: 5, order_by: [{ created_at: order_by.asc }] },
          {
            id: true,
            comment: true,
            rating: true,
            user: {
              name: true,
            },
          },
        ],

        product_reviews_aggregate: [
          {},
          {
            aggregate: {
              count: [{}, true],
              avg: { rating: true },
            },
          },
        ],

        __alias: {
          one_star_product_reviews: {
            product_reviews_aggregate: [
              { where: { rating: { _eq: 1 } } },
              {
                aggregate: {
                  count: [
                    { columns: [product_review_select_column.rating] },
                    true,
                  ],
                },
              },
            ],
          },

          two_star_product_reviews: {
            product_reviews_aggregate: [
              { where: { rating: { _eq: 2 } } },
              {
                aggregate: {
                  count: [
                    { columns: [product_review_select_column.rating] },
                    true,
                  ],
                },
              },
            ],
          },

          three_star_product_reviews: {
            product_reviews_aggregate: [
              { where: { rating: { _eq: 3 } } },
              {
                aggregate: {
                  count: [
                    { columns: [product_review_select_column.rating] },
                    true,
                  ],
                },
              },
            ],
          },

          four_star_product_reviews: {
            product_reviews_aggregate: [
              { where: { rating: { _eq: 4 } } },
              {
                aggregate: {
                  count: [
                    { columns: [product_review_select_column.rating] },
                    true,
                  ],
                },
              },
            ],
          },

          five_star_product_reviews: {
            product_reviews_aggregate: [
              { where: { rating: { _eq: 5 } } },
              {
                aggregate: {
                  count: [
                    { columns: [product_review_select_column.rating] },
                    true,
                  ],
                },
              },
            ],
          },
        },
      },
    ],
  });

  const makeReviewPercentageCalculator = (totalReviews) => (numReviews) =>
    ((numReviews / totalReviews) * 100).toFixed(0);

  const calculateReviewPercentage = makeReviewPercentageCalculator(
    product_by_pk.product_reviews_aggregate.aggregate.count
  );

  const reviewSummary = {
    totalRatings: product_by_pk.product_reviews_aggregate.aggregate.count,
    averageRating: product_by_pk.product_reviews_aggregate.aggregate.avg.rating,
    ratingPercentages: {
      oneStar: calculateReviewPercentage(
        product_by_pk.one_star_product_reviews.product_reviews_aggregate
          .aggregate.count
      ),
      twoStar: calculateReviewPercentage(
        product_by_pk.two_star_product_reviews.product_reviews_aggregate
          .aggregate.count
      ),
      threeStar: calculateReviewPercentage(
        product_by_pk.three_star_product_reviews.product_reviews_aggregate
          .aggregate.count
      ),
      fourStar: calculateReviewPercentage(
        product_by_pk.four_star_product_reviews.product_reviews_aggregate
          .aggregate.count
      ),
      fiveStar: calculateReviewPercentage(
        product_by_pk.five_star_product_reviews.product_reviews_aggregate
          .aggregate.count
      ),
    },
  };

  return {
    props: {
      ...product_by_pk,
      reviewSummary,
    },
  };
}

Product.Layout = LayoutProduct;
