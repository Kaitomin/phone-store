import React from 'react'
import { CartItem } from './'

const CartList = ({cart}) => {

  return (
    <div className='container-fluid cartlist-container border-bottom border-dark'>
      { 
        cart.map(item => (
          <CartItem key={item.id} item={item} />
        ))
      }
    </div>
  )
}

export default CartList