import React from 'react'

const CartColumns = () => {
  return (
    <div className='container-fluid text-center d-none d-lg-block'>
      <div className="row border-bottom border-dark">
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase fw-bold">Products</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase fw-bold">Name</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase fw-bold">Price</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase fw-bold">Quantity</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase fw-bold">Total</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase fw-bold">Remove</p>
        </div>
      </div>
    </div>
  )
}

export default CartColumns