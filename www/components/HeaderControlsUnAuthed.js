import * as React from "react";

const HeaderControlsUnAuthed = () => {
  return (
    <React.Fragment>
      <a href="/account/signup">
        <span className="hidden-tablet header-nav mr-xs">
          <ion-icon name="person-outline" /> Signup
        </span>
      </a>
      <a href="/account/login">
        <span className="hidden-tablet header-nav mr-xs">
          <ion-icon name="person-outline" /> Login
        </span>
      </a>
    </React.Fragment>
  );
};

export default HeaderControlsUnAuthed;
