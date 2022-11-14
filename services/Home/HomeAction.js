import {HOME_ERROR, HOME_LOADING, HOME_SUCCESS} from "./HomeType";
import axios from "axios";
import {base_url} from "../../Constrant";

export const getHome = ()=> async dispatch =>{
    try {
        dispatch({
            type:HOME_LOADING
        })
        const response =  await axios.get(`${base_url}/home/`)
        dispatch({
            type:HOME_SUCCESS,
            payload:response.data
        })
    }catch (e) {
        dispatch({
            type:HOME_ERROR
        })
    }
}