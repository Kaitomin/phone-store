import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav id='navbar' className='navbar navbar-expand-sm bg-primary navbar-dark px-sm-5'>
      <Link to='/'><i className="fa-solid fa-mobile"></i></Link>
      <ul className='navbar-nav align-items-center'>
        <li className='nav-item ml-5'>
          <Link to='/product' className='nav-link'>
            Product
          </Link>
        </li>
      </ul>
      <Link to='/cart' className='ml-auto'>
        <button className='cart-btn'><i className="fa-solid fa-cart-shopping"></i></button>
      </Link>
    </nav>
  )
}

export default Navbar