import React, { useState, useContext } from 'react'
import { storeProducts, detailProduct } from '../data'

const ProductContext = React.createContext()

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(JSON.parse(JSON.stringify(storeProducts)))

  const getItem = id => {
    return products.find(item => item.id == id)
  }
  const handleDetail = id => {
    return getItem(id)
  }
  const addToCart = id => {
    console.log('addToCart', id)
  }

  return (
    <ProductContext.Provider value={{ products, handleDetail, addToCart }}>
      { children }
    </ProductContext.Provider>
  )
}

export const useProduct = () => {
  return useContext(ProductContext)
}