import {HOME_ERROR, HOME_LOADING, HOME_SUCCESS} from "./HomeType";

const initialState = {
    loading: false,
    data: [],
    error: ""
}

const HomeReducer = (state = initialState, action) => {
    switch (action.type) {
        case HOME_LOADING:
            return {
                ...state,
                loading: true,
            }
        case HOME_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case HOME_ERROR:
            return {
                ...state,
                loading: false,
                error: "Unable to get Home"
            }
        default:
            return state;
    }
}

export default HomeReducer;