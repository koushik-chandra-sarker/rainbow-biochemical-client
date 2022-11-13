import {CLIENT_ERROR, CLIENT_LOADING, CLIENT_SUCCESS} from "./ClientType";
import axios from "axios";
import {base_url} from "../../Constrant";

export const getClient = ()=> async dispatch =>{
    try {
        dispatch({
            type:CLIENT_LOADING
        })
        const response =  await axios.get(`${base_url}/client/`)
        dispatch({
            type:CLIENT_SUCCESS,
            payload:response.data
        })
    }catch (e) {
        dispatch({
            type:CLIENT_ERROR
        })
    }
}