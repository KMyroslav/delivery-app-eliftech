import { useDispatch, useSelector } from "react-redux";
import getShops from "../../redux/shops/shopsSelectors";
import getCart from "../../redux/cart/cartSelectors";
import shopsSlice from "../../redux/shops/shopsSlice";
import styles from "./shopsContainer.module.scss";
import { toast } from "react-toastify";

export default function ShopsContainer() {
  const { data, currentShop } = useSelector(getShops);
  const { items } = useSelector(getCart);
  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {data.map((shop) => (
          <li
            key={shop._id}
            className={
              currentShop._id === shop._id
                ? `${styles.listItem} activeShop`
                : styles.listItem
            }
            style={{ backgroundImage: `url(${shop.thumbImg})` }}
            onClick={() => {
              !items.length
                ? dispatch(shopsSlice.actions.setShop(shop))
                : toast.warn(
                    "Cant order from different shop. Delete cart items first"
                  );
            }}
          >
            {/* <p className={styles.name}>{shop.name}</p> */}
          </li>
        ))}
      </ul>
    </div>
  );
}
