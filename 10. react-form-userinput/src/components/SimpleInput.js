import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: isEnteredNameValid,
    hasError: isNameInputInvalid,
    inputChangeHandler: inputNameChangeHandler,
    blurInputHandler: nameInputBlurHandler,
    reset: resetNameValues,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: isEnteredEmailValid,
    hasError: isEmailInputInvalid,
    inputChangeHandler: inputEmailChangeHandler,
    blurInputHandler: emailInputBlurHandler,
    reset: resetEmailValues,
  } = useInput((value) => value.includes("@"));

  let isFormValid = false;
  if (isEnteredNameValid && isEnteredEmailValid) {
    isFormValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
 
    if (!isEnteredNameValid) {
      return;
    }
    console.log(enteredName);
    console.log(enteredEmail);

    resetNameValues();
    resetEmailValues()
   
  };

  const nameInputClasses = isNameInputInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = isEmailInputInvalid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={inputNameChangeHandler}
          value={enteredName}
          onBlur={nameInputBlurHandler}
        />
        {isNameInputInvalid && (
          <p className="error-text">Please enter valid name.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={inputEmailChangeHandler}
          value={enteredEmail}
          onBlur={emailInputBlurHandler}
        />
        {isEmailInputInvalid && (
          <p className="error-text">Please enter valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
