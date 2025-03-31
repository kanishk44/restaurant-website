import React from "react";
import MealItemForm from "./MealItemForm";

const MealItem = ({ id, name, description, price }) => {
  return (
    <div className="flex justify-between items-center border-b border-[#ccc] py-4">
      <div>
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <div className="italic text-gray-600">{description}</div>
        <div className="text-[#8a2b06] font-bold text-xl mt-1">
          ${price.toFixed(2)}
        </div>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </div>
  );
};

export default MealItem;
