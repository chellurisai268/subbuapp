import { createSlice } from "@reduxjs/toolkit";
const initialState={
    todo:['Prabhash','Charan','Ram','Alluarjun','NTR']
}
var todoSlice=createSlice({
    name:'todolist',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.todo.push(action.payload)
        }
    }
})
export const{addTodo}=todoSlice.actions;
export default todoSlice.reducer;