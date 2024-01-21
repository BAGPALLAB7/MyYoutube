import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState: {
        sideBar: true,
    },
    reducers: {
        toggleSideBar: (state) => {
            state.sideBar = (!state.sideBar)
        },
        closeSideBar: (state) => {
        state.sideBar = false;
        },
    }
})


export const {toggleSideBar, closeSideBar} = configSlice.actions;
export default configSlice.reducer;