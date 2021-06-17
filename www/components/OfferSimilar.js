import { useRouter } from "next/router";
import Rating from "./Rating";

const SimilarOffer = ({ id, image, price, name }) => {
  const [dollars, cents] = `${price}`.split(".");
  const router = useRouter();

  return (
    <div
      className="flex-col pad-md border"
      onClick={() => router.push({ pathname: `/products/${id}` })}
      style={{
        cursor: "pointer",
      }}
    >
      <img
        className="mb-xs"
        style={{ maxHeight: 124, maxWidth: "100%" }}
        src={image}
      />
      <p className="max-description mb-xxs">{name}</p>
      <h2 className="mb-xxs">
        {`$${dollars}`}
        <span className="sm">.{(cents ? cents + "0" : "00").slice(0, 2)}</span>
      </h2>
      <Rating rating={4} />
      <span className="muted">1,100</span>
    </div>
  );
};

export default SimilarOffer;
