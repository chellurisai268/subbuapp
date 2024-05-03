
const initialState ={
    todos:['get bmw','mosha fee','manu bus fee']
}
function todolistReducer(state=initialState,action){
    
if(action.type==='add todo'){
    return {...state,todos:[...state.todos,action.payload]}
}


return state 
}
export default todolistReducer