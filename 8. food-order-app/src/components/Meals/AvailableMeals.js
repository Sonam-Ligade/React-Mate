import { useState, useCallback, useEffect } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

const AvailableMeals = () => {
const [meals, setMeals] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);

const fetchAvailableMeals = useCallback(async () =>{
  setIsLoading(true);
  setError(null);

  try{

    const response = await fetch("https://react-http-d95ad-default-rtdb.firebaseio.com/meals.json");
    if(!response.ok){
      throw new Error('Something went wrong!');
    }

    const data = await response.json();
    console.log(data);

    const fetchedMeals =[];
    for(const key in data){
      fetchedMeals.push({
        id:key,
        name: data[key].name,
        description: data[key].description,
        price: data[key].price
      });
    }
    setMeals(fetchedMeals);
    console.log(fetchedMeals);
    
  }catch(error){
    console.log(error.message);
  setError(error.message);
  }
  setIsLoading(false);
  
}, []);


useEffect(() => {
  fetchAvailableMeals();
},[fetchAvailableMeals])


if(isLoading){
  return <section className={classes.mealsIsLoading}>
    <p>Loading....</p>
  </section>
}

if(error){
  return <section className={classes.mealsError}>
    <p>{error}</p>
  </section>
}


// const mealsList = DUMMY_MEALS.map((meal) => (
  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
