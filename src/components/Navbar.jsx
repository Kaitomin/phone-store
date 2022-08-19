import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
      <Link to='/'><img src='./img/logo.png' alt='phone logo' width='50' height='50'/></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item text-center">
              <Link to='/' className='nav-link text-white'>Products</Link>
            </li>
            <i className="fa-solid fa-circle text-white d-none d-lg-block"></i>
            <li className="nav-item text-center">
              <Link to='/contact' className='nav-link text-white'>Contact</Link>
            </li>
          </ul>
        </div>
        <Link to='/cart' className='ml-auto d-none d-lg-block'>
          <button className='cart'><i className="fa-solid fa-cart-shopping"></i></button>
        </Link>
      </div>
      <Link to='/cart' className='ml-auto position-fixed d-lg-none secondary-cart-btn' style={{bottom: `20px`, left: `15px`}}>
        <button className='cart'><i className="fa-solid fa-cart-shopping"></i></button>
      </Link>
    </nav>
  )
}

export default Navbar