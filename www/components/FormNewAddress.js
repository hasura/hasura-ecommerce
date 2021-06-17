import * as React from "react";
import {
  useTypedMutation,
  $,
  useTypedQuery,
} from "../utils/gql-zeus-query-hooks";

const FormNewAddress = ({ refresh }) => {
  const [addressIntent, setAddressIntent] = React.useState("");
  const [newAccount, setNewAccount] = React.useState({
    label: "",
    addressLineOne: "",
    addressLineTwo: "",
    city: "",
    state: "",
    zipcode: "",
    userId: null,
  });

  const userQuery = useTypedQuery(
    {
      user: [{ limit: 1 }, { id: true }],
    },
    {
      onCompleted: (data) => {
        const user = data.user[0];
        if (!user) return;
        setNewAccount({ ...newAccount, userId: user.id });
      },
    }
  );

  const [addAddress, { data, loading }] = useTypedMutation(
    {
      insert_address_one: [
        {
          object: {
            address_line_one: $`addressLineOne`,
            address_line_two: $`addressLineTwo`,
            city: $`city`,
            state: $`state`,
            zipcode: $`zipcode`,
            user_id: $`userId`,
            name: $`label`,
          },
        },
        {
          name: true,
          address_line_one: true,
          address_line_two: true,
          city: true,
          state: true,
          zipcode: true,
        },
      ],
    },
    {
      onCompleted: () => {
        refresh();
        setAddressIntent("");
      },
    }
  );

  const handler = (value) => (e) => {
    e.preventDefault();
    setNewAccount({ ...newAccount, [value]: e.target.value });
  };

  return (
    <React.Fragment>
      {addressIntent === "" && (
        <div className="right">
          <button
            id="add-btn"
            className="default sm mb-xs"
            onClick={() => setAddressIntent("add")}
          >
            <ion-icon name="add-circle-outline" /> Add New Address
          </button>
        </div>
      )}

      {addressIntent === "add" && (
        <div id="add-dialogue" className="shadow card mb-sm pad-sm">
          <pre>{JSON.stringify(newAccount, " ", 4)}</pre>
          <p className="strong mb-xxs">Name</p>
          <input
            className="w-100 mb-xs"
            placeholder="Name..."
            onChange={handler("label")}
            value={newAccount.label}
          />
          <div className="row">
            <div className="col-6 pr-xxs">
              <p className="strong mb-xxs">State</p>
              <input
                className="w-100 mb-xs"
                placeholder="State..."
                onChange={handler("state")}
                value={newAccount.state}
              />
            </div>
            <div className="col-6 pl-xxs">
              <p className="strong mb-xxs">City</p>
              <input
                className=" w-100 mb-xs"
                placeholder="City..."
                onChange={handler("city")}
                value={newAccount.city}
              />
            </div>
          </div>
          <p className="strong mb-xxs">Postal Code</p>
          <input
            className="w-100 mb-xs"
            placeholder="Postal Code..."
            onChange={handler("zipcode")}
            value={newAccount.zipcode}
          />
          <p className="strong mb-xxs">Address 1</p>
          <input
            className="w-100 mb-xs"
            placeholder="Address Line 1..."
            onChange={handler("addressLineOne")}
            value={newAccount.addressLineOne}
          />
          <p className="strong mb-xxs">Address 2</p>
          <input
            className="w-100 mb-sm"
            placeholder="Address Line 2..."
            onChange={handler("addressLineTwo")}
            value={newAccount.addressLineTwo}
          />
          <div className="right">
            <button
              className="default sm mr-xs"
              onClick={() => setAddressIntent("")}
            >
              Cancel
            </button>
            <button
              className="primary sm"
              onClick={() => {
                addAddress({ variables: { ...newAccount } });
              }}
            >
              Save Address
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default FormNewAddress;
