import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalPrice: 0 },
  reducers: {
    addItem: (state, { payload }) => {
      const idx = [...state.items].findIndex((el) => el.id === payload.id);
      return idx === -1
        ? {
            items: [...state.items, payload],
            totalPrice: state.totalPrice + payload.price * payload.quantity,
          }
        : {
            items: [...state.items].map((el, i) => (i === idx ? payload : el)),
            totalPrice:
              state.totalPrice +
              payload.price * (payload.quantity - state.items[idx].quantity),
          };
    },
  },
});

export default cartSlice;
