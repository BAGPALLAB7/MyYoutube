import { configureStore } from "@reduxjs/toolkit";
import configReducer from "./configSlice"
import searchSlice from "./searchSlice";
import liveChatSlice from "./liveChatSlice";
import mainVideoSlice from "./mainVideoSlice";

const appStore = configureStore({
    reducer: {
        allVideos: mainVideoSlice,
        appConfig: configReducer,
        searchCache: searchSlice,
        liveChat: liveChatSlice,

    }
})

export default appStore;