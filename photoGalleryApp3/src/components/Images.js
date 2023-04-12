import React, { useContext } from 'react';
import { ImageContext } from '../App';
import Im from './Im';
import Skeleton from './Skeleton';



function Images() {
  const { response, isLoading , searchImage} = useContext(ImageContext);
  return (
   <>
   <h1 className='text-center mt-6'>Results for {searchImage || 'Cats'}</h1>
   <div >
  {isLoading ? <Skeleton item={10}/> : response.map((data,key)=> <Im key={key} data={data}/>)}
   </div>
   </>
  )
}

export default Images