import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
     <nav className='nav'>
        <div className='nav-logo'>
            Ev-olution
        </div>
        <div className='flex gap-x-8'>
            <div><NavLink to={'/'}>Home</NavLink></div>
            <div><NavLink to={'/explore'}>Explore</NavLink></div>
            <div><NavLink to={'/About'}>About</NavLink></div>
            <div><NavLink to={'/Contact'} className="bg-white text-black px-6 py-2 rounded-full">Contact</NavLink></div>
        
        </div>
     </nav>
  )
}

export default Navbar