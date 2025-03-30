import React from "react";
import MealItem from "./MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const Meals = () => {
  return (
    <section className="max-w-[60rem] w-[90%] mx-auto my-8 bg-white rounded-2xl p-4">
      <div className="p-4">
        {DUMMY_MEALS.map((meal) => (
          <MealItem
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
          />
        ))}
      </div>
    </section>
  );
};

export default Meals;
