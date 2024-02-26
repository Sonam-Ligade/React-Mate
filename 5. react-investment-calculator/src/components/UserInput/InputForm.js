import { useState } from "react";
import classes from "./InputForm.module.css";
import InputGroup from "./InputGroup";

const initialUserInput = {
    'current-savings': '1000',
    'yearly-contribution' : '1200',
    'expected-return': '7',
    duration:'10'
  }

const InputForm = (props) => {
  const formInputFields = [
    { id: "current-savings", label: "Current Savings ($)" },
    { id: "yearly-contribution", label: "Yearly Savings ($)" },
    { id: "expected-return", label: "Expected Interest (%, per year)" },
    { id: "duration", label: "Investment Duration (years)" },
  ];

  const [userInput, setuserInput] = useState(initialUserInput);
  
  const submitFormHandler = (event) => {
    event.preventDefault();

    props.onSaveInvInputData(userInput);

    setuserInput(initialUserInput);
  };

  const resetValuesHandler = () => {
   setuserInput(initialUserInput);
  };

  const inputChangeHandler = (id, value) =>{
    setuserInput((prevState) =>{
       return {
        ...prevState,
        [id]: value,
       };
    });
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <InputGroup value={userInput} inputFields={[formInputFields[0],formInputFields[1]]} onChange={(id,value) => inputChangeHandler(id, value)} />
      <InputGroup value={userInput} inputFields={[formInputFields[2],formInputFields[3]]} onChange={(id, value) => inputChangeHandler(id, value)} />
      <p className={classes.actions}>
          <button type="reset" className={classes.buttonAlt} onClick={resetValuesHandler}>
            Reset
          </button>
          <button type="submit" className={classes.button}>
            Calculate
          </button>
        </p>
    </form>
  );
};

export default InputForm;
