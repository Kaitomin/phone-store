import React, { useContext } from 'react'
import Product from './Product'
import { Title } from './'
import { useProduct } from '../context/ProductContext'

const ProductList = () => {
  const productsList = useProduct()

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
    </>
  )
}

export default ProductList