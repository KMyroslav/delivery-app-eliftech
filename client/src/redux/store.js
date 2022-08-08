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
import mapSlice from "./map/mapSlice";

const cartPersistConfig = {
  key: "cart",
  storage,
};

const shopsPersistConfig = {
  key: "shops",
  storage,
  whitelist: ["currentShop"],
};

export const store = configureStore({
  reducer: {
    shops: persistReducer(shopsPersistConfig, shopsSlice.reducer),
    cart: persistReducer(cartPersistConfig, cartSlice.reducer),
    user: userSlice.reducer,
    map: mapSlice.reducer,
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
