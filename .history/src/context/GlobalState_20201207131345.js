import React, { createContext, useReducer, useEffect } from 'react';

//Initial State
const initialState = {
    watchlist: [],
    watched: []
};

//Create context
export const GlobalContext = createContext(initialState);