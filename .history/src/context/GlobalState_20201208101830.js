import React, { createContext, useReducer, useEffect } from 'react';
import { AppReducer } from './AppReducer';

//Initial State
const initialState = {
    watchlist: [],
    watched: []
};

//Create context
export const GlobalContext = createContext(initialState);

//Provider Components
export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //actions
    const addMovieToWatchlist = movie => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie })
    }

    return (
        <GlobalContext.Provider value= {{ watchlist: state.watchlist, watched: state.watched }}>
            {props.children}
        </GlobalContext.Provider>
    )
}