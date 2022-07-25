const { createSlice } = require("@reduxjs/toolkit");

const mapSlice = createSlice({
  name: "map",
  initialState: { directions: "" },
  reducers: {
    setDirections: (state, { payload }) => ({ ...state, directions: payload }),
  },
});

export default mapSlice;
