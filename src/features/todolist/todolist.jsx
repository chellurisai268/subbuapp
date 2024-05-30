import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addTodo} from './todolistSlice'
function Todolist(){
    var{todo}=useSelector(state=>state.TodolistReducer)
    var[newtodo,setNewtodo]=useState('')
    var dispatch=useDispatch();
    console.log(todo)
    return (
        <div className="bg-secondary">
            <h1 className="text-info">Todolist</h1>
            <input type="text" onChange={(e)=>{setNewtodo(e.target.value)}}placeholder="ADD TODOS" />
            <button onClick={()=>{dispatch(addTodo(newtodo))}} className="btn btn-info">Add Todos</button>
            {
                todo?.map((t)=>{
                    return <li className="text-warning">{t}</li>
                })
            }
        </div>
    )
}
export default Todolist