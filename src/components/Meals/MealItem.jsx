import React, { useContext } from "react";
import MealItemForm from "./MealItemForm";
import { CartContext } from "../../store/CartContext";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <div className="flex justify-between items-center border-b border-[#ccc] py-4">
      <div>
        <h3 className="text-xl font-bold mb-1">{props.name}</h3>
        <div className="italic text-gray-600">{props.description}</div>
        <div className="text-[#8a2b06] font-bold text-xl mt-1">{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </div>
  );
};

export default MealItem;
