import {CLIENT_ERROR, CLIENT_LOADING, CLIENT_SUCCESS} from "./ClientType";

const initialState = {
    loading: false,
    data: [],
    error: ""
}

const ClientReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLIENT_LOADING:
            return {
                ...state,
                loading: true,
            }
        case CLIENT_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case CLIENT_ERROR:
            return {
                ...state,
                loading: false,
                error: "Unable to get Client"
            }
        default:
            return state;
    }
}

export default ClientReducer;