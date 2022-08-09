import React from 'react'

const CartColumns = () => {
  return (
    <div className='container-lg text-center d-none d-md-block border-top border-dark'>
      <div className="row border-bottom border-dark">
        <div className="col-10 mx-auto col-md-2">
          <p className="text-uppercase fw-bold">Product</p>
        </div>
        <div className="col-10 mx-auto col-md-3">
          <p className="text-uppercase fw-bold">Name</p>
        </div>
        <div className="col-10 mx-auto col-md-1">
          <p className="text-uppercase fw-bold">Price</p>
        </div>
        <div className="col-10 mx-auto col-md-3">
          <p className="text-uppercase fw-bold">Quantity</p>
        </div>
        <div className="col-10 mx-auto col-md-1">
          <p className="text-uppercase fw-bold">Total</p>
        </div>
        <div className="col-10 mx-auto col-md-2">
          <p className="text-uppercase fw-bold">Remove</p>
        </div>
      </div>
    </div>
  )
}

export default CartColumns