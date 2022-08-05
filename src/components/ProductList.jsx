import React, { useContext } from 'react'
import Product from './Product'
import { Title } from './'
import { ProductContext } from '../context/ProductContext'

const ProductList = () => {
  const productsList = useContext(ProductContext)

  return (
    <>
      <div className='py-5'>
        <div className="container">
          <Title name='Our' title='products' />
          <div className="row">
            { 
              productsList.products.map(product => <Product key={product.id} {...product} />)
            }
          </div>
        </div>
      </div>

      <Product />
    </>
  )
}

export default ProductList