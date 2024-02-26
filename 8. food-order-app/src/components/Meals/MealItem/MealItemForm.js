import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import {useState , useRef } from 'react';

const MealItemForm = (props) => {
    const [isAmountValid, setIsAmountValid] = useState(true);
    const inputAmountRef = useRef();
    
    const submitHandler = (event) => {
        event.preventDefault();
        const enteredAmount = inputAmountRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5 ){
            setIsAmountValid(false);
            return;
        }
        setIsAmountValid(true);
        props.onAddtoCart(enteredAmountNumber);
        
    }

    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <Input ref={inputAmountRef}
            label="Amount" input={{
                id:'amount',
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }}/>
            <button className={classes.button} > + Add</button>
            {!isAmountValid && <p>Please enter a valid amount (1-5).</p>}
        </form>

    );
};

export default MealItemForm;