import { Link } from 'react-router-dom'
import React from 'react'
import "./Navbar.css"


function Navbar() {
  return (
    <div className='navbar'>
      
        <h2 className='nav-brand'>Travel Tales</h2>

        <Link className='nav-link' to="/" >Home</Link>
        <Link className='nav-link' to="/destination">Destinations</Link>
        <Link className='nav-link' to="/blogs">Blogs</Link>
        <Link className='nav-link' to="/about">About</Link>
        <Link className='nav-link' to="/contact">Contact</Link>

        <button className='login-btn registeration'>Login</button>
        <button className='signup-btn registeration'>Sign up</button>
   

    </div>
  )
}

export default Navbar