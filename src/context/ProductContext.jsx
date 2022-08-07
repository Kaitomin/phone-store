import React, { useState, useContext, useEffect } from 'react'
import { storeProducts } from '../data'

const ProductContext = React.createContext()

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(JSON.parse(JSON.stringify(storeProducts)))
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])
  const [showModal, setShowModal] = useState(false)
  const [modalProduct, setModalProduct] = useState({})
  const [cartSubTotal, setCartSubTotal] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)
  const [cartTax, setCartTax] = useState(0)

  useEffect(() => {
    calcTotal()
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const getItem = id => {
    return products.find(item => item.id === id)
  }
  const addToCart = id => {
    const product = products[products.indexOf(getItem(id))]

    product.inCart = true
    product.count += 1
    product.total = +product.price * +product.count

    setProducts(products) 
    setCart([...cart, product])
  }
  const openModal = id => {
    const product = getItem(id)

    setShowModal(true)
    setModalProduct(product)
  }
  const closeModal = () => {
    setShowModal(false)
  }
  const incrementCartItemQuantity = id => {
    let tmpCart = [...cart]
    const selectedProduct = tmpCart.find(item => item.id === id)

    const index = tmpCart.indexOf(selectedProduct)

    const product = tmpCart[index]

    product.count += 1
    product.total = +product.price * +product.count

    setCart(tmpCart)

  }
  const decrementCartItemQuantity = id => {
    let tmpCart = [...cart]
    const selectedProduct = tmpCart.find(item => item.id === id)

    const index = tmpCart.indexOf(selectedProduct)

    const product = tmpCart[index]

    if (product.count <= 1) {
      removeCartItem(id)
    } else { 
      product.count -= 1
      product.total = +product.price * +product.count
      
      setCart(tmpCart)
    }
  }
  const removeCartItem = id => {
    let tmpCart = [...cart]

    tmpCart = tmpCart.filter(item => item.id !== id)

    const index = products.indexOf(getItem(id))
    let removedProduct = products[index]

    removedProduct.inCart = false
    removedProduct.count = 0
    removedProduct.total = 0

    setProducts(products)
    setCart(tmpCart)

  }
  const clearCart = () => {
    setCart([])
    setProducts(JSON.parse(JSON.stringify(storeProducts)))
  }
  const calcTotal = () => {
    let subTotal = 0
    cart.map(item => subTotal += item.total)
    console.log('leCart', cart)

    const tax = parseFloat((subTotal * 0.2).toFixed(2))
    const total = subTotal + tax

    setCartSubTotal(subTotal)
    setCartTax(tax)
    setCartTotal(total)
  }

  return (
    <ProductContext.Provider value={{ products, addToCart, getItem, openModal, closeModal, showModal, modalProduct, incrementCartItemQuantity, decrementCartItemQuantity, removeCartItem, clearCart, cart, cartSubTotal, cartTotal, cartTax }}>
      { children }
    </ProductContext.Provider>
  )
}

export const useProduct = () => {
  return useContext(ProductContext)
}