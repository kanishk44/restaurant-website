import React, { useContext } from "react";
import { CartContext } from "../../store/CartContext";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button
      className="cursor-pointer font-inherit border-none bg-[#4d1601] text-white py-3 px-12 flex justify-around items-center rounded-3xl font-bold hover:bg-[#2c0d00]"
      onClick={props.onClick}
    >
      <span>Your Cart</span>
      <span className="bg-[#b94517] py-1 px-4 rounded-3xl ml-4 font-bold">
        {numberOfCartItems}
      </span>
    </button>
  );
};

export default HeaderCartButton;
