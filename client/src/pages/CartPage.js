import getCart from "../redux/cart/cartSelectors";

import { useDispatch, useSelector } from "react-redux";

import CartListItem from "../components/CartListItem";
import CartForm from "../components/CartForm";
import getUser from "../redux/user/userSelectors";

import styles from "./cartPage.module.scss";

export default function CartPage() {
  const { items } = useSelector(getCart);

  return (
    <div className={styles.cartPageWrapper}>
      <CartForm />

      <div className={styles.cartListWrapper}>
        <ul className={styles.cartList}>
          {items.map((el) => (
            <CartListItem item={el} key={el.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}
