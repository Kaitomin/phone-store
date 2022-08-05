import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Navbar, ProductList, Details, Cart, Default } from './components'
import { Routes, Route, Link } from 'react-router-dom'
import { ProductContext } from './context/ProductContext'
import { storeProducts, detailProduct } from './data'
import { ProductProvider } from './context/ProductContext'

function App() {
  return (
    <>
      <ProductProvider> 
        <Navbar />
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/details/:id' element={<Details />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/*' element={<Default />} />
        </Routes>
      </ProductProvider>
    </>
  );
}

export default App;
