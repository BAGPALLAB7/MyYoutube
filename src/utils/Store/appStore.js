import { configureStore } from "@reduxjs/toolkit";
import configReducer from "./configSlice"
import searchSlice from "./searchSlice";
import liveChatSlice from "./liveChatSlice";
import mainVideoSlice from "./mainVideoSlice";
import suggestionBarSlice from "./suggestionBarSlice";

const appStore = configureStore({
    reducer: {
        appConfig: configReducer,
        allVideos: mainVideoSlice,
        suggestionBar: suggestionBarSlice,
        searchCache: searchSlice,
        liveChat: liveChatSlice,

    }
})

export default appStore;