import { createSlice } from "@reduxjs/toolkit";

const suggestionBarSlice = createSlice({
    name: "suggestionBar",
    initialState: {
        barStatus: false,
        barClicked: false,
        searchSuggestion: "",
    },
    reducers: {
        closeBar: (state) => {
            state.barStatus = false;
        },
        openBar: (state) => {
            state.barStatus = true;
        },
        closeBarClicked: (state) => {
            state.barClicked = false;
        },
        openBarClicked: (state) => {
            state.barClicked = true;
        },
        setSearchSuggestion: (state, action) => {
            state.searchSuggestion = action.payload;
        }
    }

})
export const {closeBar, openBar, closeBarClicked, openBarClicked, setSearchSuggestion} = suggestionBarSlice.actions;
export default suggestionBarSlice.reducer;