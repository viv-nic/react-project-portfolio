import React from 'react'
import { Link } from "react-router-dom";
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import data from './data'


const Footer = () => {
  // const { url } = useRouteMatch();

  return (
    <footer>

    <a href='#' className='footer__logo'>Vivian Nicholls</a>
      <ul className="permalinks">
      {
          data.map((item) => (
            <li key={item.id}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))
        }

          {/* <li>
            <Link to="/">Home</Link>
          </li>
          <li>     
            <Link to="/about">About</Link>
           </li>
           <li>     
            <Link to="/experience">Experience</Link>
           </li>
           <li>     
            <Link to="/services">Services</Link>
           </li>
           <li>     
            <Link to="/portfolio">Portfolio</Link>
           </li>
           <li>     
            <Link to="/testimonials">Testimonials</Link>
           </li>
           <li>     
            <Link to="/contact">Contact</Link>
           </li> */}
      </ul>
      
      {/* <a href='/' className='footer__logo'>Vivian Nicholls</a>

      <ul className="permalinks">
        <li><a href='/'>Home</a></li>
        <li><a href='/about'>About</a></li>
        <li><a href='/experience'>Experience</a></li>
        <li><a href='/services'>Services</a></li>
        <li><a href='/portfolio'>Portfolio</a></li>
        <li><a href='/testimonials'>Testimonials</a></li>
        <li><a href='/contact'>Contact</a></li>
      </ul> */}

      <div className="footer__socials">
        <a href='https://facebook.com' rel='noreferrer' target="_blank"><FaFacebookF /></a>
        <a href='https://instagram.com' rel='noreferrer' target="_blank"><FiInstagram /></a>
        <a href='https://twitter.com' rel='noreferrer' target="_blank"><IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>2023 &copy; Vivian Nicholls. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer