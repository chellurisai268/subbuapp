import React from "react";
import { connect } from "react-redux";
import store from "./stote";
function Counter(props){
    return(
        <div className="border border-2 border-info m-2 p-2">
            <h1>counter:{props.counterReducer.counter}</h1>
            <button class="bg-success" onClick={()=>{props.dispatch({type:'INCREMENT'})}}>increment</button>
            <button class="bg-warning" onClick={()=>{props.dispatch({type:'DECREMENT'})}}>decrement</button>


        </div>
    )
}
export default connect(function(store){return store}) (Counter)