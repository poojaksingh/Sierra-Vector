import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

export const appReducer = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAppLoader: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setAppLoader } = appReducer.actions;

export default appReducer.reducer;
