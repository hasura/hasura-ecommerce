import * as React from "react";
import { useAtom, atom } from "jotai";
import FormValidations from "./FormValidations";

const user = atom({
  email: "",
  password: "",
});

const formValid = atom((get) => {
  const userObj = get(user);
  const vals = Object.values(userObj).reduce((prev, next) => {
    if (prev && next.length > 0) return true;
    return false;
  }, true);
  return vals;
});

const compareCheck = (compare) => (predicate) => compare === predicate;

const FormSignup = ({ handleSubmit }) => {
  const [userState, setUser] = useAtom(user);
  const [validForm] = useAtom(formValid);

  const updateUser = (e) => {
    const { name, value } = e.target;

    setUser((user) => {
      const updatedUser = user;
      updatedUser[name] = value;
      return { ...user, ...updatedUser };
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    handleSubmit(userState);
  };

  return (
    <div className="container small">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <h2 className="mb-sm">Login</h2>
          <div className="card pad-sm mb-sm shadow">
            <form onSubmit={submitForm}>
              <p className="strong mb-xxs">Email</p>
              <input
                className="w-100 mb-xs"
                required={false}
                type="email"
                name="email"
                value={userState.email}
                onChange={updateUser}
                placeholder="E-Mail..."
              />
              <p className="strong mb-xxs">Password</p>
              <input
                type="password"
                className="w-100 mb-sm"
                name="password"
                value={userState.password}
                onChange={updateUser}
                placeholder="Password..."
              />
              <button
                value="submit"
                type="submit"
                disabled={!validForm}
                className={`primary mb-xs w-100 ${validForm ? "" : "disabled"}`}
              >
                Login
              </button>
              <button className="default w-100">
                Go to Sign Up <ion-icon name="arrow-forward-outline" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSignup;
