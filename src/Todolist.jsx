import React from "react";
import { connect } from "react-redux";

function Todolist(props){
    console.log(props)
    return (
        <div className="border border-2 border-primary m-2 p-2">
           <h1>Todolist</h1>
           <input type="text" id="nt"/>
           <button className="btn btn-warning" onClick={()=>{props.dispatch({type:'add todo',payload:document.getElementById("nt").value})}}>add todo</button>
            <ul>
               {
                props.todolistReducer.todos.map((todo)=>{
                    return <li>{todo}</li>
                })
               }
            </ul>
            </div>
    )
}
export default connect(store=>store) (Todolist)