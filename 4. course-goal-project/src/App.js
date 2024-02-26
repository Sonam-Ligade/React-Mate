import logo from "./logo.svg";
import "./App.css";
import CourseInput from "./components/CourseInput/CourseInput";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList/CourseGoalList";

function App() {
  const [courseGoals, setCourseGoals] = useState([
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
  ]);

  const addGoalHandler = (goal) => {
    setCourseGoals((prevState) => {
      const updatedGoals = [...prevState];
      updatedGoals.unshift({ text: goal, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteGoalHandler = (goalId) => {
    setCourseGoals(prevState => {
      const updatedGoals = prevState.filter(goal => goal.id !== goalId );
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No Goals Found! Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = <CourseGoalList items={courseGoals} onDeleteItem={deleteGoalHandler}></CourseGoalList>;
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">{content}</section>
    </div>
  );
}

export default App;
