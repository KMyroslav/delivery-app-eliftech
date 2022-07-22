import ProductContainer from "../components/ProductsContainer/ProductsContainer";
import ShopsContainer from "../components/ShopsContainer";
import styles from "./shopsPage.module.scss";
import { Bars } from "react-loader-spinner";

import getShops from "../redux/shops/shopsSelectors";

import { useSelector } from "react-redux";

export default function ShopsPage() {
  const { currentShop, isLoading } = useSelector(getShops);

  return isLoading ? (
    <div className="loader">
      <Bars
        height="150"
        width="150"
        color="#2196f3"
        ariaLabel="loading-indicator"
      />
    </div>
  ) : (
    <div className={styles.shopPageWrapper}>
      <ShopsContainer />
      <ProductContainer shop={currentShop} />
    </div>
  );
}
