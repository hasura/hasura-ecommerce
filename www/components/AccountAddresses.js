import * as React from "react";
import FormNewAddress from "./FormNewAddress";
import CardAddress from "./CardAddress";

import {
  useTypedLazyQuery,
  useTypedMutation,
  $,
} from "../utils/gql-zeus-query-hooks";

const AccountAddresses = ({ id }) => {
  const [fetchAddresses, { data, loading, error, refetch }] = useTypedLazyQuery(
    {
      address: [
        {},
        {
          id: true,
          name: true,
          address_line_one: true,
          address_line_two: true,
          city: true,
          state: true,
          zipcode: true,
          orders_with_billing_address: {
            id: true,
          },
          orders_with_shipping_address: {
            id: true,
          },
        },
      ],
    }
  );

  const [removeAddress] = useTypedMutation(
    {
      delete_address: [
        {
          where: {
            id: {
              _eq: $`id`,
            },
          },
        },
        {
          returning: {
            id: true,
          },
        },
      ],
    },
    {
      onCompleted: () => {
        refetch();
      },
    }
  );

  React.useEffect(() => {
    fetchAddresses();
  }, []);

  return (
    <React.Fragment>
      <FormNewAddress refresh={refetch} />
      {data?.address.length &&
        data.address.map((address, i) => (
          <CardAddress
            key={i}
            locked={
              address.orders_with_billing_address.length ||
              address.orders_with_shipping_address.length
            }
            {...address}
            remove={() => removeAddress({ variables: { id: address.id } })}
          />
        ))}
    </React.Fragment>
  );
};

export default AccountAddresses;
