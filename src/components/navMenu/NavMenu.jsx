import React from 'react'
import './navMenu.css'
import { NavLink } from "react-router-dom";

const NavMenu = () => {
  return (
    
        <nav>
            <div className="nav__container">
                <ul className='nav__menu'>
                    <li>
                        <NavLink exact activeClassName="active" to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/about">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/experience">
                            Experience
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/services">
                            Services
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/portfolio">
                            Portfolio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/testimonials">
                            Testimonials
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/contact">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    
  )
}

export default NavMenu