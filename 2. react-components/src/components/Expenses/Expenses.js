import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  // const [filteredExpenses, setFilteredExpenses] = useState([props.items]);
 const filteredExpenses = props.items.filter((item) => item.date.getFullYear().toString() === filteredYear);
  //derived state/value - depends on another state
  let filteredInfoText = "2021, 2022 & 2023";

  if (filteredYear === "2021") {
    filteredInfoText = "2020, 2022 & 2023";
  } else if (filteredYear === "2022") {
    filteredInfoText = "2020, 2021 & 2023";
  } else if (filteredYear === "2023") {
    filteredInfoText = "2020, 2021 & 2022";
  } else {
    filteredInfoText = "2021, 2022 & 2023";
  }

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  return (
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <p>Data for years {filteredInfoText} is hidden. </p>
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
      </Card>
  );
};

export default Expenses;
