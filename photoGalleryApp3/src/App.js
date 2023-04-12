import React, { createContext, useState } from 'react';
// import { ImageContext } from 'react';
import './App.css';
import Header from './components/Header';
import Images from './components/Images';
import SearchField from './components/SearchField';
import useAxios from "./hooks/useAxios";
const API_KEY = process.env.REACT_APP_ACCESS_KEY;

// create contect
export const ImageContext = createContext();

function App() {

  const [searchImage,setSearchImage] = useState('');
const {response, isLoading , error, fetchData} = useAxios(`search/photos?page=1&query=office&client_id=${API_KEY}`);
console.log(response);

const value ={
  response,
  isLoading,
  error,
  fetchData,
  searchImage,
  setSearchImage
}
  return (
    <ImageContext.Provider value={value}>
   <Header/>
   <SearchField/>
   <Images/>
    </ImageContext.Provider>
  );
}

export default App;
