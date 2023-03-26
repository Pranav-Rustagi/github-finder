import { CLEAR_SEARCH, GET_USERS, GET_USER_DETAILS, RESET_LOADING, SET_LOADING } from "../actions";

const AppReducer = (state, action) => {
    switch(action.type) {
        case SET_LOADING: return { ...state, loading: true, users: [], user_details: null };
        case RESET_LOADING: return { ...state, loading: false };
        case GET_USERS: return { ...state, users: action.payload };
        case GET_USER_DETAILS: return { ...state, user_details: action.payload };
        case CLEAR_SEARCH: return { ...state, users: [] };
        default: throw new Error("Something went wrong");
    }
};


export default AppReducer;