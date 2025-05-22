import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signup: (state, action) => {
      state.user = action.payload; // You can customize as needed
    },
  },
});

export const { signup } = authSlice.actions;
export default authSlice.reducer;
