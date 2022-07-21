import ProductContainer from "../components/ProductsContainer/ProductsContainer";
import ShopsContainer from "../components/ShopsContainer";

import getShops from "../redux/shops/shopsSelectors";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function ShopsPage() {
  const { currentShop, isLoading, error } = useSelector(getShops);

  return isLoading ? (
    <p>LOADER...</p>
  ) : (
    <>
      <ShopsContainer />
      <ProductContainer shop={currentShop} />
    </>
  );
}
