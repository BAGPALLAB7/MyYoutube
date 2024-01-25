import { configureStore } from "@reduxjs/toolkit";
import configReducer from "./configSlice"
import searchSlice from "./searchSlice";
import liveChatSlice from "./liveChatSlice";
import mainVideoSlice from "./mainVideoSlice";
import suggestionBarSlice from "./suggestionBarSlice";

const appStore = configureStore({
    reducer: {
        suggestionBar: suggestionBarSlice,
        allVideos: mainVideoSlice,
        appConfig: configReducer,
        searchCache: searchSlice,
        liveChat: liveChatSlice,

    }
})

export default appStore;