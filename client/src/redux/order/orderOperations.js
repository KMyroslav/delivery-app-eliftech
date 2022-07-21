import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const placeOrder = createAsyncThunk(
  "order/placeOrder",
  async (order, { rejectWithValue }) => {
    try {
      await axios.post("/api/order", order);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
