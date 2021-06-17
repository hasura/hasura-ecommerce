import * as React from "react";
import { useAtom, atom } from "jotai";
import FormValidations from "./FormValidations";

const user = atom({
  name: "",
  email: "",
  password: "",
  passwordver: "",
});

const formValid = atom((get) => {
  const userObj = get(user);
  const vals = Object.values(userObj).reduce((prev, next) => {
    if (prev && next.length > 0) return true;
    return false;
  }, true);

  const matchingPass = userObj.password === userObj.passwordver;
  return vals && matchingPass;
});

const compareCheck = (compare) => (predicate) => compare === predicate;

const FormSignup = ({ handleSubmit }) => {
  const [userState, setUser] = useAtom(user);
  const [validForm] = useAtom(formValid);

  const [validPassword, setValidPassword] = React.useState(false);
  const [formState, setFormState] = React.useState("pristine");
  const formCheck = compareCheck(formState);

  const updateUser = (e) => {
    const { name, value } = e.target;

    if (formCheck("pristine")) {
      setFormState("dirty");
    }

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
          <h2 className="mb-sm">Sign-Up</h2>
          <div className="card pad-sm mb-sm shadow">
            <form onSubmit={submitForm}>
              <p className="strong mb-xxs">Username</p>
              <input
                className="w-100 mb-xs"
                name="name"
                required={false}
                value={userState.name}
                onChange={updateUser}
                placeholder="Username..."
              />
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
                className="w-100 mb-xs"
                name="password"
                value={userState.password}
                onChange={updateUser}
                placeholder="Password..."
              />
              <p className="strong mb-xxs">Repeat Password</p>
              <input
                type="password"
                className="w-100 mb-sm"
                name="passwordver"
                value={userState.passwordver}
                onChange={updateUser}
                placeholder="Repeat Password..."
              />
              <hr className="mb-xs" />
              {!formCheck("pristine") && (
                <FormValidations
                  input={userState.password}
                  onValid={setValidPassword}
                />
              )}
              <button
                value="submit"
                type="submit"
                disabled={!validForm || !validPassword}
                className={`primary mb-xs w-100 ${
                  validForm && validPassword ? "" : "disabled"
                }`}
              >
                Sign Up
              </button>
              <button className="default w-100">
                Go to Login <ion-icon name="arrow-forward-outline" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSignup;
