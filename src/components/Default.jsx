import React from 'react'
import { Link } from 'react-router-dom'

const Default = () => {


  return (
    <div className='container'>
      <div className="row">
        <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
          <h1 className="display-3">404</h1>
          <h1>Error</h1>
          <h2>Page not found</h2>
          <Link to='/'>Back to products</Link>
        </div>
      </div>
    </div>
  )
}

export default Default