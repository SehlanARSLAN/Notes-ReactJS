import { createSlice } from "@reduxjs/toolkit";

export const colorSlice = createSlice({
  name: "color",
  initialState: {
    color: "",
  },
  reducers: {
    setColor: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const {setColor} = colorSlice.actions;
export default colorSlice.reducer;
