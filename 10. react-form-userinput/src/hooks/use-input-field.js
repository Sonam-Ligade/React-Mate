import React, { useState, useReducer } from "react";

const initialState= {
  value: '',
  isTouched: false
};

const inputStateHandler = (state, action) => {
    if(action.type === 'INPUT'){
      return {value: action.value, isTouched: state.isTouched};
    }
    if(action.type === 'BLUR'){
      return {value: state.value, isTouched: true};
    }
    if(action.type === 'RESET'){
      return {value: '', isTouched: false};
    }

  return initialState;
};

const useInputField = (validateValue) => {
    const[inputState, dispatch]= useReducer(inputStateHandler, initialState)

    const isValid = validateValue(inputState.value);
    const hasError = !isValid && inputState.isTouched;

    const inputChangeHandler = (event) => {
        dispatch({type:"INPUT", value: event.target.value});
      };
    
      const blurInputHandler = (event) => {
        dispatch({type:'BLUR'});
      };

      const reset = () => {
        dispatch({type:'RESET'});
      };

      return{
        value: inputState.value,
        isValid,
        hasError,
        inputChangeHandler,
        blurInputHandler,
        reset
      };

};

export default useInputField;