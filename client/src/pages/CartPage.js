import getCart from "../redux/cart/cartSelectors";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CartListItem from "../components/CartListItem";

export default function CartPage() {
  const { items, totalPrice } = useSelector(getCart);

  return (
    <>
      <div>
        <ul>
          {items.map((el) => (
            <CartListItem item={el} key={el.id} />
          ))}
        </ul>
      </div>
      <div>
        <p>total price: {totalPrice}$</p>
        <button>Order!</button>
      </div>
    </>
  );
}
