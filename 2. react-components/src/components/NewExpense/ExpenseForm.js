import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [eneterdAmount, setEneteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    //alternative option for multiple states
    // const [userInput, setUserInput] = useState({
    //     enteredTitle : '',
    //     eneterdAmount : '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        console.log('title changed');
        setEnteredTitle(event.target.value);

        // setUserInput((prevState) => {
        //    return { ...prevState, enteredTitle : event.target.value}
        // });
    };

    const amountChangeHandler = (event) => {
        console.log('amount changed');
        setEneteredAmount(event.target.value);

        // setUserInput((prevState) =>{
        //     return {...prevState,eneterdAmount : event.target.value};
        // });
    };

    const dateChangeHandler = (event) => {
        console.log('date changed');
        setEnteredDate(event.target.value);

        // setUserInput((prevState) => {
        //     return {...prevState, enteredDate : event.target.value };
        // });
    };

    //common handler function for values
    const inputChangeHandler = (identifier, value) => {
        if(identifier === 'title'){
            setEnteredTitle(value);
        } else if(identifier === 'amount'){
            setEneteredAmount(value);
        } else{
            setEnteredDate(value);
        }
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title : enteredTitle,
            amount : eneterdAmount,
            date : new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        console.log(expenseData);
        setEnteredTitle('');
        setEneteredAmount('');
        setEnteredDate('');
    };

    const cancelClickHandler =() => {
        console.log('cancelled');
        props.onCancel();
    };

    return(
        <form onSubmit={submitHandler} >
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={(event) => inputChangeHandler('title', event.target.value)} />
                </div>

                <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' value={eneterdAmount} min='0.01' step='0.01' onChange={(event) => {inputChangeHandler('amount', event.target.value)}}/>
                </div>

                <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' value={enteredDate} min='2020-01-01' max='2024-01-01' onChange={(event) => {inputChangeHandler('date', event.target.value)}} />
                </div>
            </div>

            <div className='new-expense__actions'>
                <button type='button' onClick={cancelClickHandler}>Cancel</button>
                <button type='submit' >Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;