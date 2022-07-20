import { configureStore } from '@reduxjs/toolkit';
import shopsReducer from './shops/shopsSlice';
import cartSlice from './cart/cartSlice';

export const store = configureStore({
  reducer: {
    shops: shopsReducer,
    cart: cartSlice.reducer
  },
});
