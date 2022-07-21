import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import shopsSlice from "./shops/shopsSlice";
import cartSlice from "./cart/cartSlice";
import userSlice from "./user/userSlice";
import orderSlice from "./order/orderSlice";

const persistConfig = {
  key: "cart",
  storage,
};

export const store = configureStore({
  reducer: {
    shops: shopsSlice.reducer,
    cart: persistReducer(persistConfig, cartSlice.reducer),
    user: userSlice.reducer,
    order: orderSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
