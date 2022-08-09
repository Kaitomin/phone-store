import React from 'react'
import { Link } from 'react-router-dom'
import { useProduct } from '../../context/ProductContext'

const CartTotal = () => {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = useProduct()

  return (
    <>
      <div className='row justify-content-end col-12'>
        <div className="col-10 mt-5 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right d-flex flex-column align-items-end">
          <Link to='/'>
            <button 
              className='btn btn-danger text-white text-uppercase mb-3 px-5' 
              type='button'
              onClick={clearCart}
            >
              <i className="fa-solid fa-rectangle-xmark"></i> Clear cart
            </button>
          </Link>
          <h6><span className='text-title'>Subtotal <i className="fa-solid fa-caret-right"></i><strong> {cartSubTotal}€</strong></span></h6>
          <h6><span className='text-title'>Tax <i className="fa-solid fa-caret-right"></i><strong> {cartTax}€</strong></span></h6>
          <h6><span className='text-title'>Total <i className="fa-solid fa-caret-right"></i><strong> {cartTotal}€</strong></span></h6>
        </div>
      </div>
    </>
  )
}

export default CartTotal