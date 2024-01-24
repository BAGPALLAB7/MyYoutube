import { createSlice } from "@reduxjs/toolkit";

const mainVideoSlice = createSlice({
    name: 'videos',
    initialState: {
        videos: null,
    },
    reducers: {
        loadVideos: (state, action) => {
            state.videos = action.payload;
        }
    }
});

export const {loadVideos} = mainVideoSlice.actions;
export default mainVideoSlice.reducer;