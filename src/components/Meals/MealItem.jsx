import React from "react";

const MealItem = ({ name, description, price }) => {
  return (
    <div className="flex justify-between items-center border-b border-[#ccc] py-4">
      <div>
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <div className="italic text-gray-600">{description}</div>
        <div className="text-[#8a2b06] font-bold text-xl mt-1">
          ${price.toFixed(2)}
        </div>
      </div>
      <div className="flex items-center">
        <button className="bg-[#8a2b06] text-white px-8 py-2 rounded-full hover:bg-[#641e03] transition-colors">
          + Add
        </button>
      </div>
    </div>
  );
};

export default MealItem;
