import React from 'react'
import { useProduct } from '../../context/ProductContext'

const CartItem = ({item}) => {
  const { id, title, img, price, total, count } = item

  const { incrementCartItemQuantity, decrementCartItemQuantity, removeCartItem } = useProduct()

  return (
    <div className='row my-2 text-capitalize text-center'>
      <div className='col-10 mx-auto col-lg-2'>
        <img src={img} alt={title} width='100' height='100' className='img-fluid' />
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        {title}
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        {price}
      </div>
      <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
        <div className='d-flex justify-content-center'>
          <div>
            <span className='btn mx-1' onClick={() => decrementCartItemQuantity(id)}>-</span>
            <span className='btn mx-1'>{count}</span>
            <span className='btn mx-1' onClick={() => incrementCartItemQuantity(id)}>+</span>
          </div>
        </div> 
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <div className='cart-icon' onClick={() => removeCartItem(id)}>
          <i className='fa-solid fa-trash'></i>
        </div>
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <strong>Item Total : {total}€</strong>
      </div>
      
    </div>
  )
}

export default CartItem