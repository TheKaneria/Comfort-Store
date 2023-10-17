import React from "react";
import { useSelector } from "react-redux";
import { formatePrice } from '../Utils'

const CartTotals = () => {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cartState
  );
  return <div className="card bg-base-200">
    <div className="card-body">
      <p className="flex justify-between text-xs border-b border-base-300 pb-2">
        <span>Subtotal</span>
        <span className="font-medium">{formatePrice(cartTotal)}</span>
      </p>
      <p className="flex justify-between text-xs border-b border-base-300 pb-2">
        <span>Shipping</span>
        <span className="font-medium">{formatePrice(shipping)}</span>
      </p>
      <p className="flex justify-between text-xs border-b border-base-300 pb-2">
        <span>Tax</span>
        <span className="font-medium">{formatePrice(tax)}</span>
      </p>
      <p className="flex justify-between text-sm mt-4 pb-2">
        <span>Grand Total</span>
        <span className="font-medium">{formatePrice(orderTotal)}</span>
      </p>
    </div>
  </div>;
};

export default CartTotals;
