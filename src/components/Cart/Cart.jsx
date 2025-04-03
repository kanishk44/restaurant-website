import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { CartContext } from "../../store/CartContext";

const CartItem = (props) => {
  return (
    <li className="flex justify-between items-center border-b border-[#8a2b06] py-4">
      <div>
        <h2 className="text-xl font-bold">{props.name}</h2>
        <div className="flex justify-between w-[10rem]">
          <span className="text-[#8a2b06] font-bold">${props.price}</span>
          <span className="font-bold border border-[#ccc] px-3 rounded">
            x {props.amount}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <button
          className="border border-[#8a2b06] text-[#8a2b06] px-4 py-1 rounded-md hover:bg-[#8a2b06] hover:text-white"
          onClick={props.onRemove}
        >
          -
        </button>
        <button
          className="border border-[#8a2b06] text-[#8a2b06] px-4 py-1 rounded-md hover:bg-[#8a2b06] hover:text-white"
          onClick={props.onAdd}
        >
          +
        </button>
      </div>
    </li>
  );
};

const Backdrop = (props) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen z-20 bg-black bg-opacity-75"
      onClick={props.onClose}
    />
  );
};

const ModalOverlay = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  return (
    <div className="fixed top-[20vh] left-[5%] w-[90%] bg-white p-4 rounded-2xl shadow-lg z-30 md:w-[40rem] md:left-[calc(50%-20rem)]">
      <ul className="max-h-[20rem] overflow-auto">
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        ))}
      </ul>
      <div className="flex justify-between items-center font-bold text-2xl my-4">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className="text-right">
        <button
          className="ml-4 border border-[#8a2b06] px-8 py-2 rounded-3xl text-[#8a2b06] hover:bg-[#8a2b06] hover:text-white"
          onClick={props.onClose}
        >
          Close
        </button>
        <button className="ml-4 bg-[#8a2b06] border border-[#8a2b06] px-8 py-2 rounded-3xl text-white hover:bg-[#5a1a04]">
          Order
        </button>
      </div>
    </div>
  );
};

const Cart = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("overlays")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose} />,
        document.getElementById("overlays")
      )}
    </>
  );
};

export default Cart;
