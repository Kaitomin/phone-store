import React, { useEffect } from 'react'
import { useProduct } from '../context/ProductContext'
import { Link, useParams } from 'react-router-dom'


const Details = () => {
  const params = useParams()

  const { getItem, addToCart } = useProduct()

  const { id, company, img, info, price, title, inCart } = getItem(+params.id)

  return (
    <div className='container py-5'>
      <div className='row'>
        <div className='col-10 mx-auto text-center text-slanted text-blue my-5'>
          <h1>{title}</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-10 mx-auto col-md-6 my-3'>
          <img src={`../${img}`} alt={title} className='img-fluid' />  
        </div>
        <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
          <h1>Model - {title}</h1>
          <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>
            Made by <span className='text-uppercase'>{company}</span>
          </h4>
          <h4 className='text-blue'>
            <strong>{price}<span>€</span></strong>
          </h4>
          <p className="text-capitalize font-weigth-bold mt-3 mb-0">About -</p>
          <p className='text-muted lead'>{info}</p>
          <div>
            <Link to='/'>Back to products</Link>
            <button 
              disabled={inCart ? true : false}
              onClick={() => addToCart(id)}
            >
              { inCart ? 'Already in cart' : 'Add to cart' }
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Details