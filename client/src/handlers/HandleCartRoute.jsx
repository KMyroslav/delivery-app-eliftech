import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import getCart from "redux/cart/cartSelectors";
import { toast } from "react-toastify";

export default function HandleCartRoute({ children, redirectTo = "/" }) {
  const { items } = useSelector(getCart);
  if (!items.length) toast.info("add some items to cart first");
  return items.length ? children : <Navigate to={redirectTo} />;
}
