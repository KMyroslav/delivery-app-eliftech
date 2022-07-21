import { createSlice } from "@reduxjs/toolkit";

const checkData = (user) => {};

const userSlice = createSlice({
  name: "user",
  initialState: { data: {}, isValid: null },
  reducers: {
    addUserData: (state, { payload }) => ({ ...state, ...payload }),
  },
});

export default userSlice;
