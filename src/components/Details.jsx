import React, { useState } from 'react'
import { useProduct } from '../context/ProductContext'
import { Link, useParams } from 'react-router-dom'


const Details = () => {
  const [quantity, setQuantity] = useState(1)

  const params = useParams()
  const { getItem, debounce, addToCart, openModal } = useProduct()
  const { id, company, img, info, price, title } = getItem(+params.id)

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
  const assignThumbnail = e => {
    const img = document.querySelector('.main-img')
    const thumbnails = document.querySelectorAll('.thumbnail')

    img.src = e.target.src

    thumbnails.forEach(thumbnail => {
      if (thumbnail.src === e.target.src) thumbnail.classList.add('border-dark')
      else thumbnail.classList.remove('border-dark')
    })
  }
  // const debounce = (cb, delay = 1000) => {
  //   let timer

  //   return () => {
  //     clearTimeout(timer)
  //     timer = setTimeout(() => cb(), delay)
  //   }
  // }

  return (
    <div className='details container py-5 px-0'>
      <div className='row'>
        <div className='col-10 mx-auto col-md-6 my-3 d-flex justify-content-center align-items-center flex-column gap-5'>
          <img src={`../${img}`} alt={title} className='main-img' width='100%' height='auto' style={{maxWidth: 400 + 'px'}} />
          <div className='thumbnails d-flex col-12 flex-wrap justify-content-evenly'>
            <img src='/img/product-3.png' alt='thumbnail' className='thumbnail border border-gray border-dark' width='100' height='auto' onClick={assignThumbnail} />
            <img src='/img/product-5.png' alt='thumbnail' className='thumbnail border border-gray' width='100' height='auto' onClick={assignThumbnail} />
            <img src='/img/product-4.png' alt='thumbnail' className='thumbnail border border-gray' width='100' height='auto' onClick={assignThumbnail} />
            <img src='/img/product-6.png' alt='thumbnail' className='thumbnail border border-gray' width='100' height='auto' onClick={assignThumbnail} />
            <img src='/img/product-7.png' alt='thumbnail' className='thumbnail border border-gray' width='100' height='auto' onClick={assignThumbnail} />
          </div>
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
          <div className='actions d-flex justify-content-between gap-5'>
            <Link to='/'><i className="fa-solid fa-circle-arrow-left"></i> Back to products</Link>
            {/* <button onClick={() => {addToCart(id, quantity);openModal()}}> */}
            <button onClick={debounce(() => {addToCart(id, quantity);openModal()})}>
              <span><i className="fa-solid fa-cart-plus"></i> Add to cart</span>
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Details