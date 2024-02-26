import React, {useState} from "react";

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    const isValid = validateValue(enteredValue);
    const hasError = !isValid && isTouched;

    const inputChangeHandler = (event) => {
        setEnteredValue(event.target.value);
      };

      const blurInputHandler = () => {
        setIsTouched(true);
      };


    const reset = () => {
        setEnteredValue("");
        setIsTouched(false);
    } 

    return{value: enteredValue, isValid, hasError, inputChangeHandler, blurInputHandler, reset };
}

export default useInput;