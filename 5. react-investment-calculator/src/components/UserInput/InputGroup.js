import InputItem from "./InputItem";
import classes from "./InputForm.module.css";
const InputGroup = (props) => {

    const inputChangeHandler = (id, value) =>{
        props.onChange(id, value);
    };
 
  return(
    <div className={classes['input-group']}>
    {props.inputFields.map((inputItem) => 
    <InputItem value={props.value[inputItem.id]} key={inputItem.id} id={inputItem.id} label={inputItem.label} onChange={(id, value) => inputChangeHandler(id, value)}>{props.children}</InputItem>)}
    </div>
  );

};

export default InputGroup;
