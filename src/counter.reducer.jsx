
const initialState ={
    counter:0,
}
function counterReducer(state=initialState,action){
    if(action.type==='INCREMENT')
    return {...state,counter:state.counter+1}
    if(action.type==='DECREMENT')
    return {...state,counter:state.counter-1}

return state 
}
export default counterReducer