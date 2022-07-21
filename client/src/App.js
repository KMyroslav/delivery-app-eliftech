import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import { useDispatch } from "react-redux";

import { fetchShops } from "./redux/shops/shopsOperations";

import ShopsPage from "./pages/ShopsPage";
import Nav from "./components/Nav";
import CartPage from "./pages/CartPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShops());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<ShopsPage />} />
          <Route path="/Cart" element={<CartPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
