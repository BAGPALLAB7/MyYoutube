import { configureStore } from "@reduxjs/toolkit";
import configReducer from "./configSlice"

const appStore = configureStore({
    reducer: {
        appConfig: configReducer,
    }
})

export default appStore;