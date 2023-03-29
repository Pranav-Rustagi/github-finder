import { useReducer } from "react";
import AppReducer from "../reducer/AppReducer";
import AppContext from "../context/AppContext"
import { CLEAR_SEARCH, GET_USERS, GET_USER_DETAILS, RESET_LOADING, SET_ERROR, SET_LOADING } from "../actions";
import axios from "axios";

const AppState = (props) => {
    const initState = {
        users: [],
        user_details: null,
        user_repos: null,
        loading: true,
        error: false,
    };

    let githubClientId, githubClientSecret;
    if(process.env.NODE_ENV === "production") {
        githubClientId = process.env.GITHUB_CLIENT_ID
        githubClientSecret = process.env.GITHUB_CLIENT_SECRET
    } else {
        githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
        githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
    }

    const [state, dispatch] = useReducer(AppReducer, initState);

    const getUsers = async (query) => {
        try {
            dispatch({ type: SET_LOADING });

            query = query?.trim();

            const url = `https://api.github.com/${query ? "search/" : ""}users`;
            const params = {
                client_id: githubClientId,
                client_secret: githubClientSecret
            };

            if (query) {
                params.q = query;
            }

            const res = await axios.get(url, { params });
            const data = query ? res.data.items : res.data;
            console.log(data);
            dispatch({ type: GET_USERS, payload: data });
            dispatch({ type: RESET_LOADING });
        } catch (err) {
            console.log("Error");
            console.error(err);
            dispatch({ type: SET_ERROR });
            dispatch({ type: RESET_LOADING });
        }
    };

    const getUserDetails = async (query) => {
        try {
            dispatch({ type: SET_LOADING });
            const params = {
                client_id: githubClientId,
                client_secret: githubClientSecret
            };

            const res_user_details = await axios.get(`https://api.github.com/users/${query}`, { params });
            const res_user_repos = await axios.get(`https://api.github.com/users/${query}/repos`, {
                params: {
                    ...params,
                    per_page: 5,
                    sort: "desc"
                }
            });
            
            dispatch({ type: GET_USER_DETAILS, payload: { ...res_user_details.data, user_repos: res_user_repos.data } });
            dispatch({ type: RESET_LOADING });

        } catch (err) {
            console.log("Error");
            console.error(err);
            dispatch({ type: SET_ERROR });
            dispatch({ type: RESET_LOADING });
        }
    }

    const clearSearch = () => {
        dispatch({ type: CLEAR_SEARCH });
    }

    return (
        <AppContext.Provider value={{ ...state, getUsers, clearSearch, getUserDetails }}>
            {props.children}
        </AppContext.Provider>
    );
}


export default AppState;
