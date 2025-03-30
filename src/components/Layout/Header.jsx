import React from "react";

const Header = (props) => {
  return (
    <>
      <header className="fixed top-0 left-0 w-full h-20 bg-[#8a2b06] text-white flex justify-between items-center px-[10%] shadow-md z-10">
        <h1 className="text-2xl font-bold">ReactMeals</h1>
        <button className="cursor-pointer font-inherit border-none bg-[#4d1601] text-white py-3 px-12 flex justify-around items-center rounded-3xl font-bold hover:bg-[#2c0d00]">
          <span>Your Cart</span>
          <span className="bg-[#b94517] py-1 px-4 rounded-3xl ml-4 font-bold">
            0
          </span>
        </button>
      </header>
      <div className="w-full h-[25rem] z-0 overflow-hidden">
        <img
          src="/meals.jpg"
          alt="A table full of delicious food!"
          className="w-[110%] h-full object-cover -rotate-5 -translate-y-16 -translate-x-4"
        />
      </div>
    </>
  );
};

export default Header;
