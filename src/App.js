import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Navbar, ProductList, Details, Cart, Default, Modal, Contact } from './components'
import { Routes, Route } from 'react-router-dom'
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
          <Route path='/contact' element={<Contact />} />
          <Route path='/*' element={<Default />} />
        </Routes>
        <Modal />
      </ProductProvider>
    </>
  );
}

export default App;
