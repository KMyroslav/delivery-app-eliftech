import { useState } from "react";
import { useDispatch } from "react-redux";
import cartSlice from "../../redux/cart/cartSlice";

export default function CartListItem({ item }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.quantity);

  return (
    <li>
      <img src={item.img} />
      <p>{item.name}</p>
      <p>Price: {item.price}$</p>
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
            cartSlice.actions.addItem({ ...item, quantity: e.target.value })
          );
        }}
      />
    </li>
  );
}
