import React from "react";
import { inc,dec, reset } from "./counterSlice";
import { useDispatch, useSelector } from "react-redux";
function Counter(){
    var {counter}=useSelector(state=>state.counterReducer)
    console.log(counter)
    var dispatch =useDispatch()
    return (
        <div className="bg-secondary p-2 m-2">
            <h1 className="text-warning">Counter :{counter}</h1>
            <button className='btn btn-info' onClick={()=>{dispatch(inc())}}>INCREMENT</button>
            <button className='btn btn-success'  onClick={()=>{dispatch(dec())}}>DECREMENT</button>
            <button className='btn btn-danger' onClick={()=>{dispatch(reset())}}>RESET</button>
        </div>
    )
}
export default Counter