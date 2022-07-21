import { placeOrder } from "./orderOperations";

import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: { isOrdered: false, isLoading: true, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(placeOrder.fulfilled, (state) => ({
        ...state,
        isOrdered: true,
        isLoading: false,
      }))
      .addCase(placeOrder.pending, (state) => ({
        ...state,
        isOrdered: false,
        isLoading: true,
      }))
      .addCase(placeOrder.rejected, (state, { payload }) => ({
        ...state,
        isOrdered: false,
        isLoading: false,
        error: payload,
      }));
  },
});

export default orderSlice.reducer;
