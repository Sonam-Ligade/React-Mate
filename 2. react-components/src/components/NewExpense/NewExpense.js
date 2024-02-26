import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const[isEditing, setIsEditing] = useState(false);
    
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };


  const startEditingHandler = () => {
    console.log('clicked');
    setIsEditing(true);
    
  };

  const cancelNewExpenseHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
        {!isEditing && <button type="click" onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelNewExpenseHandler} />}
    </div>
  );
};

export default NewExpense;
