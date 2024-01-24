import { createSlice } from "@reduxjs/toolkit";

const liveChatSlice = createSlice({
    name: "live chat",
    initialState: {
        message: [],
    },
    reducers: {
        addLiveChat: (state, action) => {
                state.message.splice(50,1);
            
            state.message.unshift(action.payload);
        }
    }
});

 export const {addLiveChat} = liveChatSlice.actions;
export default liveChatSlice.reducer;