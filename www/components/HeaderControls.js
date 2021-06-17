import * as React from "react";
import { useAtom } from "jotai";
import { accountReducerAtom, actions } from "../state/AccountState";
import { cartIsOpen } from "../state/CartState";
import HeaderControlsAuthed from "./HeaderControlsAuthed";
import HeaderControlsUnAuthed from "./HeaderControlsUnAuthed";

const HeaderControls = () => {
  const [account, dispatch] = useAtom(accountReducerAtom);
  const { name, loggedIn } = account;
  const [, setCartOpen] = useAtom(cartIsOpen);

  React.useEffect(() => {
    dispatch({ type: actions.HYDRATED });
  }, []);

  return (
    <div className="col-4 sm-center right">
      {loggedIn && <HeaderControlsAuthed name={name} />}
      {!loggedIn && <HeaderControlsUnAuthed />}

      <button
        id="cart-btn"
        className="btn-reset"
        onClick={() => setCartOpen((status) => !status)}
      >
        <span className="header-nav">
          <ion-icon name="cart-outline" /> Cart
        </span>
      </button>
    </div>
  );
};

export default HeaderControls;
