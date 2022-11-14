import {combineReducers} from "redux";
import ClientReducer from "../Clients/ClientReducer";
import HomeReducer from "../Home/HomeReducer";



const RootReducer = combineReducers({
    client:ClientReducer,
    home:HomeReducer,
})

export default RootReducer;