import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      <p> Order Summary: {cart.length}</p>
    </div>
  );
};

export default Cart;
