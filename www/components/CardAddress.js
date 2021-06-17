import * as React from "react";

const CardAddress = ({
  name = "",
  address_line_one = "",
  address_line_two = "",
  city = "",
  state = "",
  zipcode = "",
  remove,
  locked,
}) => {
  return (
    <div className="card mb-sm pad-sm">
      {!locked && (
        <button
          className="default red pull-right sm"
          onClick={remove}
          disabled={locked}
        >
          Remove
        </button>
      )}

      <p className>{name}</p>
      <p className>{address_line_one}</p>
      {address_line_two && <p className>{address_line_two}</p>}
      <p className>
        {city}, {state}
      </p>
      <p className>{zipcode}</p>
    </div>
  );
};

export default CardAddress;
