import { useState } from "react";
import { useDispatch } from "react-redux";
import cartSlice from "../../redux/cart/cartSlice";

export default function CartListItem({ item }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.quantity);

  return (
    <li>
      <img src={item.img} alt={`${item.name}`} />
      <p>{item.name}</p>
      <p>Price: {Number(item.price * quantity).toFixed(2)}$</p>
      <input
        type="number"
        name="quantity"
        min="1"
        max="25"
        step="1"
        value={quantity}
        onChange={(e) => {
          setQuantity(e.target.value);
          dispatch(
            cartSlice.actions.manageItem({ ...item, quantity: e.target.value })
          );
        }}
      />
      <button onClick={() => dispatch(cartSlice.actions.removeItem({ item }))}>
        Remove
      </button>
    </li>
  );
}
