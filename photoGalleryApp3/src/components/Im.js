import React from 'react'

function Im({data}) {
  return (
    <div>
        <a href={data.urls.regular} target ="_blank" rel='noreferrer'>
            <img src={data.urls.small} alt={data.alt_description}/>
        </a>
    </div>
  )
}

export default Im