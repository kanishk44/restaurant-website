import React from "react";

const HeaderCartButton = (props) => {
  return (
    <button
      className="cursor-pointer font-inherit border-none bg-[#4d1601] text-white py-3 px-12 flex justify-around items-center rounded-3xl font-bold hover:bg-[#2c0d00]"
      onClick={props.onClick}
    >
      <span>Your Cart</span>
      <span className="bg-[#b94517] py-1 px-4 rounded-3xl ml-4 font-bold">
        3
      </span>
    </button>
  );
};

export default HeaderCartButton;
