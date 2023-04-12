import React from 'react'

function Skeleton({ item}) {
  return (
    [...Array(item).keys()].map(()=>{
        <div>
            
        </div>
    })
  )
}

export default Skeleton