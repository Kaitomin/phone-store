import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import { Link, useParams } from 'react-router-dom'

const Details = () => {
  // const params = useParams()
  const products = useContext(ProductContext)
  const { id, company, img, info, price, title, inCart } = products.detailProduct
  

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
          <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>Made by <span className='text-uppercase'>{company}</span></h4>
        </div>
      </div>
    </div>
  )
}

export default Details