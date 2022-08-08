import React, { useState, useContext, useEffect } from 'react'
import { storeProducts } from '../data'

const ProductContext = React.createContext()

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(JSON.parse(JSON.stringify(storeProducts)))
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])
  const [showModal, setShowModal] = useState(false)
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
  const addToCart = (id, quantity = 1) => {
    const product = products[products.indexOf(getItem(id))]

    const productInCart = cart.find(item => item.id === product.id)

    if (!productInCart) {
      product.inCart = true
      product.count += quantity
      product.total = +product.price * +product.count
  
      setProducts(products) 
      setCart([...cart, product])
    } else {
      productInCart.count += quantity
      productInCart.total = +productInCart.price * +productInCart.count

      setCart([...cart])
    }
  }
  const openModal = () => {
    setShowModal(true)

    setTimeout(() => {
      setShowModal(false)
    }, 2000)
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

    const tax = parseFloat((subTotal * 0.2).toFixed(2))
    const total = subTotal + tax

    setCartSubTotal(subTotal)
    setCartTax(tax)
    setCartTotal(total)
  }

  return (
    <ProductContext.Provider value={{ products, addToCart, getItem, openModal, showModal, incrementCartItemQuantity, decrementCartItemQuantity, removeCartItem, clearCart, cart, cartSubTotal, cartTotal, cartTax }}>
      { children }
    </ProductContext.Provider>
  )
}

export const useProduct = () => {
  return useContext(ProductContext)
}