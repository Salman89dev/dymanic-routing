import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbars = () => {
  return (
    <div>
        <ul>
            <li><Link to="/"> Home </Link> </li>
            <li><Link to="about"> About </Link> </li>
            <li><Link to="cardgallery"> All Products </Link> </li>

        </ul>
    </div>
  )
}

export default Navbars
