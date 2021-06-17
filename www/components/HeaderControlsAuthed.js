import * as React from "react";
import { useAtom } from "jotai";
import { accountReducerAtom, actions } from "../state/AccountState";
import useOnClickOutside from "../hooks/useOnClickOutside";

const HeaderControlsAuthed = ({ name }) => {
  const [account, dispatch] = useAtom(accountReducerAtom);

  const [menuOpen, setMenuOpen] = React.useState(false);

  const menu = React.useRef();
  useOnClickOutside(menu, () => setMenuOpen(false));

  return (
    <div className="dropdown">
      <button
        className="hidden-tablet header-nav mr-xs"
        onClick={() => setMenuOpen((v) => !v)}
      >
        <ion-icon class="mr-xxs" name="person-outline"></ion-icon> {name}{" "}
        <ion-icon name="chevron-down-outline"></ion-icon>
      </button>
      <div className={`menu left ${menuOpen ? "active" : ""}`}>
        <ul ref={menu}>
          <li className="link">
            <a href="/account">
              <ion-icon class="mr-xxs" name="person-outline"></ion-icon> My
              Account
            </a>
          </li>
          <li className="link">
            <a href="#!">
              <ion-icon class="mr-xxs" name="receipt-outline"></ion-icon> Orders
            </a>
          </li>
          <li className="link">
            <button
              className="btn-reset"
              onClick={() => {
                dispatch({ type: actions.LOGGING_OUT });
              }}
            >
              <span className="hidden-tablet header-nav mr-xs">
                <ion-icon class="mr-xxs" name="log-out-outline"></ion-icon>{" "}
                Logout
              </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderControlsAuthed;
