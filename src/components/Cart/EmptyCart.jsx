import React from 'react'

const EmptyCart = () => {
  return (
    <div className='container mt-5'>
      <div className="row">
        <div className="col-10 mx-auto text-center text-title">
          <h1>Cart is empty</h1>
          <img src='img/empty-cart.png' alt='empty cart' width='150' height='150' className='mt-5' />
        </div>
      </div>
    </div>
  )
}

export default EmptyCart