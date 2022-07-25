import { useState } from "react";
import { useDispatch } from "react-redux";
import cartSlice from "../../redux/cart/cartSlice";
import styles from "./cartListItem.module.scss";
import { toast } from "react-toastify";

export default function CartListItem({ item }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.quantity);

  return (
    <li className={styles.listItem}>
      <img
        src={item.img}
        alt={`${item.name}`}
        className={styles.img}
        width="337"
        height="280"
      />
      <button
        className={styles.button}
        onClick={() => {
          toast.error(`${item.name} removed from cart`);
          dispatch(cartSlice.actions.removeItem({ item }));
        }}
      >
        Remove
      </button>
      <div className={styles.infoWrapper}>
        <div className={styles.descWrapper}>
          <p className={styles.name}>{item.name}</p>
          <p className={styles.price}>
            Price: {Number(item.price * quantity).toFixed(2)}$
          </p>
        </div>
        <input
          className={styles.input}
          type="number"
          name="quantity"
          min="1"
          max="25"
          step="1"
          value={quantity}
          onChange={(e) => {
            if (e.target.value <= 0) {
              e.target.value = quantity;
              return;
            }
            if (e.target.value > 25) e.target.value = 25;

            setQuantity(e.target.value);
            dispatch(
              cartSlice.actions.manageItem({
                ...item,
                quantity: e.target.value,
              })
            );
          }}
        />
      </div>
    </li>
  );
}
