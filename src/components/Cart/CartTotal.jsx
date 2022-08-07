import React from 'react'
import { Link } from 'react-router-dom'
import { useProduct } from '../../context/ProductContext'

const CartTotal = () => {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = useProduct()

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to='/'>
              <button 
                className='btn btn-outline-danger text-uppercase mb-3 px-5' 
                type='button'
                onClick={clearCart}
              >
                Clear cart
              </button>
            </Link>
            <h5><span className='text-title'>Subtotal: <strong>{cartSubTotal}€</strong></span></h5>
            <h5><span className='text-title'>Tax: <strong>{cartTax}€</strong></span></h5>
            <h5><span className='text-title'>Total: <strong>{cartTotal}€</strong></span></h5>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartTotal