import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalPrice: 0 },
  reducers: {
    manageItem: (state, { payload }) => {
      const idx = [...state.items].findIndex((el) => el.id === payload.id);
      return idx === -1
        ? {
            ...state,
            items: [...state.items, payload],
            totalPrice: state.totalPrice + payload.price * payload.quantity,
          }
        : {
            ...state,
            items: [...state.items].map((el, i) => (i === idx ? payload : el)),
            totalPrice:
              state.totalPrice +
              payload.price * (payload.quantity - state.items[idx].quantity),
          };
    },
    removeItem: (state, { payload }) => {
      const item = [...state.items].find((el) => el.id === payload.item.id);
      if (!item) return { ...state };
      const totalPrice = state.totalPrice - item.price * item.quantity;
      return {
        ...state,
        items: state.items.filter((el) => el.id !== item.id),
        totalPrice,
      };
    },
  },
});

export default cartSlice;
