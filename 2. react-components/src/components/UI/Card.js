import './Card.css';

const Card = (props) => {
const classValue = props.className + ' card';
return <div className={classValue}>{props.children}</div>
}

export default Card;