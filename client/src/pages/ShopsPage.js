import ProductContainer from "../components/ProductsContainer/ProductsContainer";
import ShopsContainer from "../components/ShopsContainer";

import getShops from "../redux/shops/shopsSelectors";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function ShopsPage() {
  const { data, isLoading, error } = useSelector(getShops);
  const [shop, setShop] = useState()

  return (
      isLoading ? (
        <p>LOADER...</p>
      ) : (
        <>
          <ShopsContainer shops={data} setShop={setShop} />
          <ProductContainer shop={shop || data[0]} />
        </>
      )
  );
}
