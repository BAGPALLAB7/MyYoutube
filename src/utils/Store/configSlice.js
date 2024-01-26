import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    smallDevice: true,
    sideBar: false,
    mobileSearchBar: false,
  },
  reducers: {
    toggleSideBar: (state) => {
      state.sideBar = !state.sideBar;
    },
    toggleSearchBar: (state) => {
      state.mobileSearchBar = !state.mobileSearchBar;
    },
    closeSideBar: (state) => {
      state.sideBar = false;
    },
    showSideBar: (state) => {
      state.sideBar = true;
    },
    closeSearchBar: (state) => {
      state.mobileSearchBar = false;
    },
    showSearchBar: (state) => {
      state.mobileSearchBar = true;
    },
    updateSmallDevice: (state,action)=> {
      state.smallDevice = action.payload;
    },
  },
});

export const { toggleSideBar, closeSideBar, showSideBar,closeSearchBar,showSearchBar ,toggleSearchBar,updateSmallDevice } = configSlice.actions;
export default configSlice.reducer;
