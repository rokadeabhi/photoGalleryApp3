import React, {useContext, useState } from 'react';
import { ImageContext } from '../App';

function SearchField() {
  const [searchValue,setSearchValue] = useState("");

  const { fetchData, setSearchImage } =useContext(ImageContext);

const handleInputChange = (e)=>{
  setSearchValue(e.target.value);
}

const handleButtonSearch = () =>{
  fetchData(`search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`);
  setSearchValue("");
  setSearchImage(searchValue);
}

const handleEnterSearch = (e)=>{
if(e.key === 'Enter'){
  fetchData(`search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`);
  setSearchValue("");
  setSearchImage(searchValue);
}
}

  return (
    <div className='container'>
        <input type = "search" className="form-control"  placeholder="Enter image to search"
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleEnterSearch}/>

        <button onClick={handleButtonSearch} 
        disabled = {!searchValue}
        className='btn btn-primary ' >search</button>
    </div>
  )
}

export default SearchField