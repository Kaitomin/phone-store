import React from 'react'
import { useProduct } from '../context/ProductContext'

const Modal = () => {
  const { showModal } = useProduct()

  return (
    <>
      {!showModal ? null : (
        <div className='modal-container'>
          <i className="fa-solid fa-circle-check"></i><span> Item added</span>
        </div>
      )}
    </>
  )
}

export default Modal