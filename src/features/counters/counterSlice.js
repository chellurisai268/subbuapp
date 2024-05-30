import { createSlice } from "@reduxjs/toolkit";
const initialState={
    counter:0
}
export const counterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        inc:(state,action)=>{
            state.counter++;
        },
        dec:(state,action)=>{
            state.counter--;
        },
        reset:(state,action)=>{
            state.counter=0;
        },
    }
})
export var {inc,dec,reset}=counterSlice.actions;
export default counterSlice.reducer
