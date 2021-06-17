import Rating from "./Rating";

const Offer = ({ product, rating, reviews }) => {
  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const formattedPrice = currencyFormatter
    .formatToParts(product.price)
    .map(({ type, value }) => {
      switch (type) {
        case "fraction":
          return <span className="sm">{value}</span>;
        default:
          return <>{value}</>;
      }
    });

  return (
    <div>
      <img
        className="mb-xs"
        style={{ maxHeight: 124, maxWidth: "100%" }}
        src={product.image_urls[0]}
      />
      <p className="max-description mb-xxs">
        {product.brand} {product.name}
      </p>
      <h2 className="mb-xxs">{formattedPrice}</h2>
      <Rating rating={rating} />
      <span className="muted">{reviews}</span>
    </div>
  );
};

export default Offer;
