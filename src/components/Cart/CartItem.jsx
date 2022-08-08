import React from 'react'
import { useProduct } from '../../context/ProductContext'

const CartItem = ({item}) => {
  const { id, title, img, price, total, count } = item

  const { incrementCartItemQuantity, decrementCartItemQuantity, removeCartItem } = useProduct()

  return (
    <div className='row my-2 text-capitalize text-center align-items-center'>
      <div className='col-10 mx-auto col-lg-2'>
        <img src={img} alt={title} width='75' height='75' className='img-fluid' />
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        {title}
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        {price}€
      </div>
      <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
        <div className='d-flex justify-content-center'>
          <div className='quantity'>
            <span className='btn border border-dark rounded-1' onClick={() => decrementCartItemQuantity(id)}>-</span>
            <span className='btn'>{count}</span>
            <span className='btn border border-dark rounded-1' onClick={() => incrementCartItemQuantity(id)}>+</span>
          </div>
        </div> 
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <strong>{total}€</strong>
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <div className='cart-icon' onClick={() => removeCartItem(id)}>
          <i className='fa-solid fa-trash'></i>
        </div>
      </div>
    </div>
  )
}

export default CartItem