import React, {createContext, useContext, useState, useEffect} from 'react';
import useFetch from './useFetch';
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`


const AppContext = createContext();

const AppProvider = ({children}) => {
  return(
    <AppContext.Provider>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export {AppContext, AppProvider, useGlobalContext}