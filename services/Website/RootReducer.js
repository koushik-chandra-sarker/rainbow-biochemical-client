import {combineReducers} from "redux";
import ClientReducer from "../Clients/ClientReducer";



const RootReducer = combineReducers({
    client:ClientReducer,

})

export default RootReducer;