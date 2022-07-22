import { useState } from "react";
import { useDispatch } from "react-redux";
import cartSlice from "../../../redux/cart/cartSlice";
import { toast } from "react-toastify";

import styles from "./productListItem.module.scss";

export default function ProductListItem({ product }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  return (
    <li className={styles.wrapper}>
      <img
        className={styles.img}
        src={product.img}
        alt={`${product.name}`}
        width="281"
        height="192"
      />
      <div className={styles.infoWrapper}>
        <p className={styles.name}>{product.name}</p>
        <div className={styles.descWrapper}>
          <input
            type="number"
            name="quantity"
            min="1"
            max="25"
            step="1"
            value={quantity}
            className={styles.input}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
          <button
            className={styles.button}
            onClick={() => {
              dispatch(cartSlice.actions.manageItem({ ...product, quantity }));
              toast.info(`${quantity} ${product.name} in cart`);
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </li>
  );
}
