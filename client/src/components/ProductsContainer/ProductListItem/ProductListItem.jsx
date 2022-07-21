import { useState } from "react";
import { useDispatch } from "react-redux";
import cartSlice from "../../../redux/cart/cartSlice";

export default function ProductListItem({ product }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    dispatch(cartSlice.actions.manageItem({ ...product, quantity }));
  };
  return (
    <li>
      <img src={product.img} alt={`${product.name}`} />
      <p>{product.name}</p>
      <input
        type="number"
        name="quantity"
        min="1"
        max="25"
        step="1"
        value={quantity}
        onChange={(e) => {
          setQuantity(e.target.value);
        }}
      />
      <button onClick={handleAddToCart}>Add to cart</button>
    </li>
  );
}
