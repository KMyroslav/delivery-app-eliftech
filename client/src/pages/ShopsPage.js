import ProductContainer from "../components/ProductsContainer/ProductsContainer";
import ShopsContainer from "../components/ShopsContainer";
import styles from "./shopsPage.module.scss";

import getShops from "../redux/shops/shopsSelectors";

import { useSelector } from "react-redux";

export default function ShopsPage() {
  const { currentShop, isLoading, error } = useSelector(getShops);

  return isLoading ? (
    <p>LOADER...</p>
  ) : (
    <div className={styles.shopPageWrapper}>
      <ShopsContainer />
      <ProductContainer shop={currentShop} />
    </div>
  );
}
