import React from 'react'
import { Link } from 'react-router-dom'
import { useProduct } from '../../context/ProductContext'

const CartItem = ({item}) => {
  const { id, title, img, price, total, count } = item

  const { incrementCartItemQuantity, decrementCartItemQuantity, removeCartItem } = useProduct()

  return (
    <div className='row my-2 text-capitalize text-center align-items-center py-3'>
      <div className='col-10 col-md-2 mx-auto col-lg-2'>
        <Link to={`/details/${id}`}>
          <img src={img} alt={title} width='75' height='75' className='img-fluid' />
        </Link>
      </div>
      <div className='col-10 col-md-3 mx-auto col-lg-2'>
        {title}
      </div>
      <div className='col-10 col-md-1 mx-auto col-lg-2'>
        {price}€
      </div>
      <div className='col-10 col-md-3 mx-auto col-lg-2 my-2 my-lg-0'>
        <div className='d-flex justify-content-center'>
          <div className='quantity'>
            <span className='btn border border-dark rounded-1 d-inline-flex align-items-center h-75' onClick={() => decrementCartItemQuantity(id)}>-</span>
            <span className='btn'>{count}</span>
            <span className='btn border border-dark rounded-1 d-inline-flex align-items-center h-75' onClick={() => incrementCartItemQuantity(id)}>+</span>
          </div>
        </div> 
      </div>
      <div className='col-10 col-md-1 mx-auto col-lg-2'>
        <strong>{total}€</strong>
      </div>
      <div className='col-10 col-md-2 mx-auto col-lg-2'>
        <div className='cart-icon' onClick={() => removeCartItem(id)}>
          <i className='fa-solid fa-trash text-danger'></i>
        </div>
      </div>
    </div>
  )
}

export default CartItem