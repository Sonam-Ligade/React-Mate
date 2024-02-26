import classes from './Checkout.module.css';
import { useRef, useState } from 'react';


const isEmpty = (value) => value.trim() === ''; 
const isFiveChars = (value) => value.trim().length === 5; 

const Checkout = (props) => {
    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();
    const cityInputRef = useRef();

    const [isFormValidity, setIsFormValidity] = useState({
        name: true,
        street: true,
        postalCode: true,
        city: true
    });

    const confirmOrderHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostalCode = postalInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const isEnteredNameValid = !isEmpty(enteredName);
        const isEnteredStreetValid = !isEmpty(enteredCity);
        const isEnteredCityValid = !isEmpty(enteredCity);
        const isEnteredPostalCodeValid = isFiveChars(enteredPostalCode);

        setIsFormValidity({
            name: isEnteredNameValid,
            street: isEnteredStreetValid,
            postalCode: isEnteredPostalCodeValid,
            city: isEnteredCityValid
        });

        const isValidForm = isEnteredNameValid && isEnteredStreetValid && isEnteredCityValid && isEnteredPostalCodeValid ;

        if(!isValidForm){
            return
        }
          
 
        const inputData = {
            name: enteredName,
            street: enteredStreet ,
            postalCode: enteredPostalCode ,
            city: enteredCity
        }
       props.onConfirm(inputData);

    };

    const nameControlClass = `${classes.control} ${isFormValidity.name ? '' : classes.invalid}`;
    const streetControlClass = `${classes.control} ${isFormValidity.street ? '' : classes.invalid}`;
    const postlCodeControlClass = `${classes.control} ${isFormValidity.postalCode ? '' : classes.invalid}`;
    const cityControlClass = `${classes.control} ${isFormValidity.city ? '' : classes.invalid}`;

    return <form className={classes.form} onSubmit={confirmOrderHandler}>
        <div className={nameControlClass}>
            <label htmlFor='name'>Your Name</label>
            <input ref={nameInputRef} type='text' id='name'/>
            {!isFormValidity.name && <p>Please enter valid name.</p>}
        </div>
        <div className={streetControlClass}>
            <label htmlFor='street'>Street</label>
            <input ref={streetInputRef} type='text' id='street'/>
            {!isFormValidity.street && <p>Please enter valid street.</p>}
        </div>
        <div className={postlCodeControlClass}>
            <label htmlFor='postal'>Postal Code</label>
            <input ref={postalInputRef} type='text' id='postal'/>
            {!isFormValidity.postalCode && <p>Please enter valid postal code.</p>}
        </div>
        <div className={cityControlClass}>
            <label htmlFor='city'>City</label>
            <input ref={cityInputRef} type='text' id='city'/>
            {!isFormValidity.city && <p>Please enter valid city.</p>}
        </div>
        <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button className={classes.submit}>Confirm</button>
        </div>
    </form>

};

export default Checkout;