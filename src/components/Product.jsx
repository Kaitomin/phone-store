import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { useProduct } from '../context/ProductContext'

const Product = (product) => {
  const { id, title, img, price } = product
  const { addToCart, openModal, debounce } = useProduct()

  return (
    <div className='product-container col-9 col-md-4 col-lg-3 my-3'>
      <div className="card item-card">

        <div className="img-container p-3 position-relative overflow-hidden">
          <img src={img} alt='product' className='card-img-top' />
          <div className='product-overlay'>
          <Link to={`/details/${id}`}><i className="fa-solid fa-magnifying-glass"></i>View</Link>
          <button onClick={debounce(() => {addToCart(id); openModal()})}>
            <i className="fa-solid fa-cart-plus"></i>Add
          </button>
          </div>
        </div>

        <div className="card-footer d-flex justify-content-between">
          <p className='align-self-center mb-0'>{title}</p>
          <h5 className='text-blue font-italic mb-0 text-white'>{price}<span className='mr-1'>€</span></h5>
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