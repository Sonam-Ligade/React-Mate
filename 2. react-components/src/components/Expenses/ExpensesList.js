import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.items.length == 0) {
    return <h2 className="expenses-list__fallback">No Expesnes Found.</h2>;
  }

  return (
  <ul className="expenses-list">
   { props.items.map((item) => (
    <ExpenseItem
      key={item.id}
      date={item.date}
      title={item.title}
      amount={item.amount}
    />
    ))  }
  </ul>);
};

export default ExpensesList;
