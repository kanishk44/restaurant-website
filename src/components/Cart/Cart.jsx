import React from "react";
import ReactDOM from "react-dom";

const Backdrop = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen z-20 bg-black bg-opacity-75" />
  );
};

const ModalOverlay = () => {
  return (
    <div className="fixed top-[20vh] left-[5%] w-[90%] bg-white p-4 rounded-2xl shadow-lg z-30 md:w-[40rem] md:left-[calc(50%-20rem)]">
      <div className="text-2xl mb-4">Sushi</div>
      <div className="flex justify-between items-center font-bold text-2xl mb-4">
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className="text-right">
        <button className="ml-4 border border-[#8a2b06] px-8 py-2 rounded-3xl text-[#8a2b06] hover:bg-[#8a2b06] hover:text-white">
          Close
        </button>
        <button className="ml-4 bg-[#8a2b06] border border-[#8a2b06] px-8 py-2 rounded-3xl text-white hover:bg-[#5a1a04]">
          Order
        </button>
      </div>
    </div>
  );
};

const Cart = () => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById("overlays"))}
      {ReactDOM.createPortal(
        <ModalOverlay />,
        document.getElementById("overlays")
      )}
    </>
  );
};

export default Cart;
