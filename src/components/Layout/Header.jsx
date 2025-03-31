import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import RestaurantSummary from "./RestaurantSummary";

const Header = (props) => {
  return (
    <>
      <header className="fixed top-0 left-0 w-full h-20 bg-[#8a2b06] text-white flex justify-between items-center px-[10%] shadow-md z-10">
        <h1 className="text-2xl font-bold">ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className="w-full h-[25rem] z-0 overflow-hidden">
        <img
          src="/meals.jpg"
          alt="A table full of delicious food!"
          className="w-[110%] h-full object-cover -rotate-5 -translate-y-16 -translate-x-4"
        />
      </div>
      <RestaurantSummary />
    </>
  );
};

export default Header;
