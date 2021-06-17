import * as React from "react";

const FormValidations = ({ input, onValid }) => {
  const [validPassword, setValidPassword] = React.useState(false);
  const [validations, setValidations] = React.useState([
    {
      label: "1 Lowercase Character",
      passes: false,
      pattern: /[a-z]/,
    },
    {
      label: "1 Uppercase Character (A-Z)",
      passes: false,
      pattern: /[A-Z]/,
    },
    {
      label: "1 Number (0-9)",
      passes: false,
      pattern: /[0-9]/,
    },
    {
      label: "1 Special Character ($@#&!-)",
      passes: false,
      pattern: /[\$\@#&\!-]/,
    },
  ]);

  React.useEffect(() => {
    setValidPassword(true);

    const updatedValidations = validations.map((validation) => {
      let check = new RegExp(validation.pattern);
      validation.passes = check.test(input);
      if (!validation.passes && validPassword) {
        setValidPassword(false);
      }
      return validation;
    });

    if (validPassword) {
      onValid(true);
    }
    setValidations(updatedValidations);
  }, [input]);

  return (
    <React.Fragment>
      <p> Your password must contain at least:</p>
      <div className="mb-sm">
        {validations.map((validation, index) => {
          const { label, passes } = validation;
          return (
            <p key={index}>
              {passes && <ion-icon class="green" name="checkmark" />}
              {!passes && <ion-icon class="red" name="close" />}
              {label}
            </p>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default FormValidations;
