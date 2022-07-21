import { useDispatch, useSelector } from "react-redux";
import getShops from "../../redux/shops/shopsSelectors";
import getCart from "../../redux/cart/cartSelectors";
import shopsSlice from "../../redux/shops/shopsSlice";
import styles from "./shopsContainer.module.scss";

export default function ShopsContainer() {
  const { data } = useSelector(getShops);
  const { items } = useSelector(getCart);
  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {data.map((shop) => (
          <li
            key={shop._id}
            className={styles.listItem}
            style={{ backgroundImage: `url(${shop.thumbImg})` }}
            onClick={() => {
              !items.length
                ? dispatch(shopsSlice.actions.setShop(shop))
                : console.log("nope");
            }}
          ></li>
        ))}
      </ul>
    </div>
  );
}
