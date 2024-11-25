import { createSlice } from "@reduxjs/toolkit";

const massageSlice = createSlice({
    name:"message",
    initialState:{
        messages:[],
    },
    reducers:{
        setMessage:(state,action)=>{
            state.messages = action.payload;
        }
    }
})

export const {setMessage} = massageSlice.actions;
export default massageSlice.reducer;