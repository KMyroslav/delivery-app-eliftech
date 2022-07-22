import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import { useDispatch } from "react-redux";

import { fetchShops } from "./redux/shops/shopsOperations";

import ShopsPage from "./pages/ShopsPage";
import Nav from "./components/Nav";
import CartPage from "./pages/CartPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HandleCartRoute from "handlers/HandleCartRoute";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShops());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Nav />
        <div className="container">
          <Routes>
            <Route path="/" element={<ShopsPage />} />
            <Route
              path="/Cart"
              element={
                <HandleCartRoute>
                  <CartPage />
                </HandleCartRoute>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
      <ToastContainer
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
