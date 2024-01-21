import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "suggestion",
    initialState:{

    },
    reducers:
    {
        addSuggestionCache: (state, action) => {
            state = Object.assign(state,action.payload)
        }
    }
})

export const {addSuggestionCache} = searchSlice.actions;

export default searchSlice.reducer;