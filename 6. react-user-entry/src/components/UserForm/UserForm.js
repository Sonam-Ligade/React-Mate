import { useRef, useState } from "react";
import Card from "../UI/Card";
import classes from './UserForm.module.css';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

// const initialUserInput = {
//     username: '',
//     age:''
// };
const UserForm = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

    // const [userInput, setUserInput] = useState(initialUserInput);
    const [error, setError] = useState('');

  // const changeInputHandler = (id, value) => {
  //   setUserInput((prevState) => {
  //       return {...prevState,[id]: value }
  //   });
  // };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredUsername = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 ){
        console.log('Missing Input');
        setError({
          title:'Invalid Input',
          message: 'Please enter a valid name and age (non-empty values)'
        });
        return;
    } else if(+enteredAge < 1){
        console.log('Invalid Age');
        setError({
          title:'Invalid Input',
          message: 'Please enter a valid age (> 0)'
        });
        return;
    } else{
        props.onAddUser(enteredUsername, enteredAge);
    }

    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
    
  };


    const errorHandler = () => {
      setError(null);
    };

  return (
    <div>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card className={classes.input}>
    <form onSubmit={submitHandler}>
          <label>Username</label>
          <input type="text" id='username' ref={nameInputRef}></input>
          <label>Age (Years)</label>
          <input type="number" id='age' ref={ageInputRef}></input>
        <Button type="submit">Add User</Button>
    </form>
    </Card>
    </div>
  );
};

export default UserForm;
