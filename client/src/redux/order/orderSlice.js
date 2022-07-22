import { toast } from "react-toastify";

import { placeOrder } from "./orderOperations";

import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: { isOrdered: false, isLoading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(placeOrder.fulfilled, (state) => {
        toast.success("Order placed!");
        return {
          ...state,
          isOrdered: true,
          isLoading: false,
        };
      })
      .addCase(placeOrder.pending, (state) => ({
        ...state,
        isOrdered: false,
        isLoading: true,
      }))
      .addCase(placeOrder.rejected, (state, { payload }) => {
        toast.error("Something went wrong :(");
        return {
          ...state,
          isOrdered: false,
          isLoading: false,
          error: payload,
        };
      });
  },
});

export default orderSlice.reducer;
