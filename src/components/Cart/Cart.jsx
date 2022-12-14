import React from 'react'
import Title from '../Title'

import { EmptyCart, CartColumns, CartList, CartTotal } from './'
import { useProduct } from '../../context/ProductContext'

const Cart = () => {
  const { cart } = useProduct()

  return (
    cart.length <= 0 ? 
    <EmptyCart /> :
    <div className='container-lg cart-container py-5'>
      <Title name='Your' title='cart' />
      <CartColumns />
      <CartList cart={cart} />
      <CartTotal />
    </div>
  )
}

export default Cart