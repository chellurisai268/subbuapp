import { combineReducers } from "redux";
import todolistReducer from "./todolist.reducer";
import counterReducer from "./counter.reducer";
const reducer=combineReducers({todolistReducer,counterReducer})
export default reducer