import { useDispatch, useSelector } from "react-redux";
import getShops from "../../redux/shops/shopsSelectors";
import getCart from "../../redux/cart/cartSelectors";
import shopsSlice from "../../redux/shops/shopsSlice";

export default function ShopsContainer() {
  const { data } = useSelector(getShops);
  const { items } = useSelector(getCart);
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {data.map((shop) => (
          <li
            key={shop._id}
            onClick={() => {
              !items.length
                ? dispatch(shopsSlice.actions.setShop(shop))
                : console.log("nope");
            }}
          >
            {/* <img src={shopImg} alt={shop.name} /> */}
            <p>{shop.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
