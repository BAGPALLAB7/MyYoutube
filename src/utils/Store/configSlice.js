import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    sideBar: true,
  },
  reducers: {
    toggleSideBar: (state) => {
      state.sideBar = !state.sideBar;
    },
    closeSideBar: (state) => {
      state.sideBar = false;
    },
    showSideBar: (state) => {
      state.sideBar = true;
    },
  },
});

export const { toggleSideBar, closeSideBar, showSideBar } = configSlice.actions;
export default configSlice.reducer;
