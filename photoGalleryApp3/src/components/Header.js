import React from 'react'

function Header({ children}) {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-3'>
                <h1>Find images</h1>
                {children}
            </div>
        </div>

    </div>
  )
}

export default Header