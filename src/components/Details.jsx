import React, { useState, useEffect } from 'react'
import { useProduct } from '../context/ProductContext'
import { Link, useParams } from 'react-router-dom'


const Details = () => {
  const [quantity, setQuantity] = useState(1)

  const params = useParams()
  const { getItem, addToCart } = useProduct()
  const { id, company, img, info, price, title, inCart } = getItem(+params.id)

  const decrementQuantity = () => {
    if (quantity <= 1) return
    setQuantity(quantity - 1)
  }
  const incrementQuantity = () => {
    setQuantity(quantity + 1)
  }
  const assignQuantity = e => {
    if (parseInt(e.target.value) <= 0 || isNaN(parseInt(e.target.value))) return
    setQuantity(+e.target.value)
  }

  return (
    <div className='details container py-5'>
      <div className='row'>
        <div className='col-10 mx-auto col-md-6 my-3 d-flex justify-content-center align-items-center'>
          <img src={`../${img}`} alt={title} className='img-fluid' />  
        </div>
        <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
          <h1 className='border-bottom border-dark pb-3'>{title}</h1>
          <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>
            Made by <span className='text-uppercase text-blue'>{company}</span>
          </h4>
          <h4 className='text-blue price'>
            <strong>{price}<span>€</span></strong>
          </h4>
          <p className='text-muted info'>{info}</p>
          <div className='quantity-container mt-5 mb-4 d-flex flex-column pb-4 border-bottom border-dark'>
            <label>Quantity</label>
            <div>
              <button onClick={decrementQuantity}>-</button>
              <input type='number' min='1' value={quantity} onChange={assignQuantity} />
              <button onClick={incrementQuantity}>+</button>
            </div>
          </div>
          <div className='actions d-flex gap-5'>
            <Link to='/'><i className="fa-solid fa-circle-arrow-left"></i> Back to products</Link>
            <button onClick={() => addToCart(id, quantity)}>
              <span><i className="fa-solid fa-cart-plus"></i> Add to cart</span>
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Details