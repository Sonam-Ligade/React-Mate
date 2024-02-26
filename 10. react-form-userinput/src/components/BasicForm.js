import { useState } from "react";
import useInputField from "../hooks/use-input-field";

const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.includes('@');

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: isFirstNameValid,
    hasError: isFirstNameInvalid,
    inputChangeHandler: inputFirstNameChangeHandler,
    blurInputHandler: blurFirstNameHandler,
    reset: resetFirstNameValues
  } = useInputField(isNotEmpty);


  const {
    value: enteredLastName,
    isValid: isLastNameValid,
    hasError: isLastNameInvalid,
    inputChangeHandler: inputLastNameChangeHandler,
    blurInputHandler: blurLastNameHandler,
    reset: resetLastNameValues
  } = useInputField(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: isEmailValid,
    hasError: isEmailInvalid,
    inputChangeHandler: inputEmailChangeHandler,
    blurInputHandler: blurEmailHandler,
    reset: resetEmailValues
  } = useInputField(isEmail);

  let isFormValid = false;

  if (isFirstNameValid && isLastNameValid && isEmailValid) {
    isFormValid = true;
  }
  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!isFormValid) {
      return;
    }

    console.log(enteredFirstName);
    console.log(enteredLastName);
    console.log(enteredEmail);

    resetFirstNameValues();
    resetLastNameValues();
    resetEmailValues();
  };

  const inputFirstNameClasses = isFirstNameInvalid
    ? "form-control invalid"
    : "form-control";

    const inputLastNameClasses = isLastNameInvalid
    ? "form-control invalid"
    : "form-control";


    const inputEmailClasses = isEmailInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={inputFirstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={inputFirstNameChangeHandler}
            onBlur={blurFirstNameHandler}
            value={enteredFirstName}
          />
          {isFirstNameInvalid && (
            <p className="error-text">Please enter valid first name.</p>
          )}
        </div>
        <div className={inputLastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={inputLastNameChangeHandler}
            onBlur={blurLastNameHandler}
            value={enteredLastName}
          />
          {isLastNameInvalid && (
            <p className="error-text">Please enter valid Last name.</p>
          )}
        </div>
      </div>
      <div className={inputEmailClasses}>
          <label htmlFor="name">E-Mail Address</label>
          <input
            type="text"
            id="name"
            onChange={inputEmailChangeHandler}
            onBlur={blurEmailHandler}
            value={enteredEmail}
          />
          {isEmailInvalid && (
            <p className="error-text">Please enter valid email address.</p>
          )}
        </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
