


const InputItem = props => {

    const inputChangeHandler=(id, value) =>{
        props.onChange(id, value);
    };

 return( 
    <p>
    <label htmlFor={props.id}>{props.label}</label>
    <input value={props.value} type="number" id={props.id} onChange={(event) => inputChangeHandler( props.id, event.target.value)}>{props.children}</input>
  </p>
 );

};

export default InputItem;