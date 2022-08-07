import React from 'react'
import { useProduct } from '../context/ProductContext'
import { Link } from 'react-router-dom'


const Modal = () => {
  const { modalProduct, showModal, closeModal } = useProduct()
  const { img, title, price } = modalProduct

  return (
    <>
      {!showModal ? null : (
        <div className='modal-container'>
          <div className='row'>
            <div id='modal' className='col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize'>
              <h5>Item added to cart</h5>
              <img src={img} alt={title} className='img-fluid' />
              <h5>{title}</h5>
              <h5 className='text-muted'>{price}€</h5>
              <Link to='/'>
                <button onClick={closeModal}>Back to products list</button>
              </Link>
              <Link to='/cart'>
                <button onClick={closeModal}>Check cart</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal