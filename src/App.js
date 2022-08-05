import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Navbar, ProductList, Details, Cart, Default } from './components'
import { Routes, Route, Link } from 'react-router-dom'
import { ProductContext } from './context/ProductContext'
import { storeProducts, detailProduct } from './data'

function App() {
  return (
    <>
      <ProductContext.Provider value={{products: JSON.parse(JSON.stringify(storeProducts)), detailProduct}}>
        <Navbar />
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/details/:id' element={<Details />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/*' element={<Default />} />
        </Routes>
      </ProductContext.Provider>
    </>
  );
}

export default App;
