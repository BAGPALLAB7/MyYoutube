import { configureStore } from "@reduxjs/toolkit";
import configReducer from "./configSlice"
import searchSlice from "./searchSlice";

const appStore = configureStore({
    reducer: {
        appConfig: configReducer,
        searchCache: searchSlice,
    }
})

export default appStore;