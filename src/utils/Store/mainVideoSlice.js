import { createSlice } from "@reduxjs/toolkit";

const mainVideoSlice = createSlice({
    name: 'videos',
    initialState: {
        homeVideos: null,
        queryVideos: null,
    },
    reducers: {
        loadVideos: (state, action) => {
            state.homeVideos = action.payload;
        },
        loadQueryVideos: (state, action) => {
            state.queryVideos = action.payload;
        }
    }
});

export const {loadVideos, loadQueryVideos} = mainVideoSlice.actions;
export default mainVideoSlice.reducer;