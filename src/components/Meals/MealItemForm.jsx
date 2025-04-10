import React, { useState } from "react";

const MealItemForm = (props) => {
  const [amount, setAmount] = useState(1);

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddToCart(+amount);
  };

  return (
    <form className="text-right" onSubmit={submitHandler}>
      <div className="flex items-center mb-2">
        <label htmlFor={`amount_${props.id}`} className="font-bold mr-4">
          Amount
        </label>
        <input
          type="number"
          id={`amount_${props.id}`}
          min="1"
          max="5"
          step="1"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-12 rounded-md border border-gray-300 pl-2 py-1"
        />
      </div>
      <button
        type="submit"
        className="bg-[#8a2b06] text-white px-8 py-1 rounded-full hover:bg-[#641e03] transition-colors font-bold"
      >
        + Add
      </button>
    </form>
  );
};

export default MealItemForm;
