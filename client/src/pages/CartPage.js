import getCart from "../redux/cart/cartSelectors";

import { useDispatch, useSelector } from "react-redux";

import { placeOrder } from "../redux/order/orderOperations";

import CartListItem from "../components/CartListItem";
import CartForm from "../components/CartForm";
import getUser from "../redux/user/userSelectors";

export default function CartPage() {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector(getCart);
  const { data: user, isValid } = useSelector(getUser);

  return (
    <>
      <CartForm />
      <div>
        <ul>
          {items.map((el) => (
            <CartListItem item={el} key={el.id} />
          ))}
        </ul>
      </div>
      <div>
        <p>total price: {Number(totalPrice).toFixed(2)}$</p>
        <button
          disabled={!items || !isValid}
          onClick={() => {
            dispatch(
              placeOrder({ shop: "McDonalds", user, items, totalPrice })
            );
          }}
        >
          Order!
        </button>
      </div>
    </>
  );
}
