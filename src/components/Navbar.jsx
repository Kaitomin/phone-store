import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav id='navbar' className='navbar navbar-expand-sm navbar-dark px-sm-5 justify-content-between'>
      <Link to='/'><img src='./img/logo.png' alt='phone logo' width='50' height='50'/></Link>
      <ul className='navbar-nav align-items-center'>
        <li className='nav-item ml-5'>
          <Link to='/' className='nav-link text-white'>
            Products
          </Link>
        </li>
        <i className="fa-solid fa-circle text-white"></i>
        <li>
        <Link to='/contact' className='nav-link text-white'>
            Contact
          </Link>
        </li>
      </ul>
      <Link to='/cart' className='ml-auto'>
        <button className='cart'><i className="fa-solid fa-cart-shopping"></i></button>
      </Link>
    </nav>
  )
}

export default Navbar