import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaSearch, FaShoppingCart } from 'react-icons/fa'


export default function Navbar() {
  return (
    <nav class="navbar">
                <div class="up">
                    <a href='/' class="logo">J'achete<small>.cm</small></a>
                <input type="search" placeholder='Recherche...' /><FaSearch className='icon-search'/>
                </div>
                <div class="nav-links">
                    <ul>
                        <li className="links"><Link><FaShoppingCart className='icon-shopping' /></Link></li>
                        <li className="links"><Link to={'./Login'}>Connexion</Link></li>
                    </ul>
                </div>
    </nav>
  )
}
