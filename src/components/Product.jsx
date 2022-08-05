import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { useProduct } from '../context/ProductContext'

const Product = (product) => {
  const { id, title, img, price, inCart } = product
  const { handleDetail, addToCart } = useProduct()

  return (
    <div className='product-container col-9 mx-auto col-md-6 col-lg-3 my-3'>
      <div className="card">



        <div className="img-container p-5">
          <Link to={`/details/${id}`} >
            <img src={img} alt='product' className='card-img-top' />
          </Link>
          <button 
            className='cart-btn' 
            disabled={inCart ? true : false} 
            onClick={() => addToCart(id)}
          >
            {
              inCart ? 
              <p className='text-capitalize mb-0' disabled>Already in cart</p> : 
              <i className="fa-solid fa-cart-plus"></i>
            }
          </button>
        </div>



        <div className="card-footer d-flex justify-content-between">
            <p className='align-self-center mb-0'>{title}</p>
            <h5 className='text-blue font-italic mb-0'>{price}<span className='mr-1'>€</span></h5>
        </div>
      </div>
    </div>
  )
}

Product.propTypes = {
  id: PropTypes.number,
  img: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  inCart: PropTypes.bool
}

export default Product