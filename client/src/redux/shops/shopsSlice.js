import { fetchShops } from "./shopsOperations";

import { createSlice } from "@reduxjs/toolkit";

const shopsSlice = createSlice({
    name: 'shops',
    initialState: {data: [], isLoading: true, error: null},
    extraReducers: (builder) => {
      builder.addCase(fetchShops.fulfilled, (state, { payload }) => ({
        ...state,
        data: payload,
        isLoading: false,
      }))
      .addCase(fetchShops.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchShops.rejected, (state, { payload }) => ({
        ...state,
      isLoading: false,
      error: payload,
      }))
    },
})

export default shopsSlice.reducer