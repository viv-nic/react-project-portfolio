import React, { useState } from 'react'
import {Link} from "react-router-dom";
import './nav.css'

import data from './data'

const Nav = () => {
  // const [activeNav, setActiveNav] = useState('/')
  return (

    <nav>
    
      <ul className='nav'>
        {
          data.map((item) => (
            <li key={item.id}>
              <Link to={item.link}>{item.icon}</Link>
            </li>
          ))
        }
        {/* {
          data.map(item => <li key={item.id}><a href={item.link}>{item.icon}</a></li>)
        } */}
      </ul>
      
    
  </nav>
    // <nav>
    //   <ul className='nav'>
    //       <li className='nav__item'>
    //           <NavLink exact activeClassName='active' to="/">
    //             <AiOutlineHome />
    //           </NavLink>
    //       </li>
    //       <li className='nav__item'>
    //           <NavLink exact activeClassName='active' to="/about">
    //             <AiOutlineUser />
    //           </NavLink>
    //       </li>
    //       <li className='nav__item'>
    //           <NavLink exact activeClassName='active' to="/experience">
    //             <BiBook />
    //           </NavLink>
    //       </li>          
    //       <li className='nav__item'>
    //           <NavLink exact onClick={() => setActiveNav('/services')} className={activeNav === '/services' ? 'active' : ''} to="/services">
    //             <RiServiceLine />
    //           </NavLink>
    //       </li> 
    //       <li className='nav__item'>
    //           <NavLink exact onClick={() => setActiveNav('/portfolio')} className={activeNav === '/portfolio' ? 'active' : ''} to="/portfolio">
    //             <SlPuzzle />
    //           </NavLink>
    //       </li> 
    //       <li className='nav__item'>
    //           <NavLink exact onClick={() => setActiveNav('/contact')} className={activeNav === '/contact' ? 'active' : ''} to="/contact">
    //             <BiMessageSquareDetail />
    //           </NavLink>
    //       </li> 
                    
    //   </ul>
    // </nav>
    
      
    
    // <nav>
    //     <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
    //     <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
    //     <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
    //     <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
    //     <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><SlPuzzle /></a>
    //     <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    // </nav>
  )
}

export default Nav