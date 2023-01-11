import React from 'react'
import CV from '../../assets/CV.pdf'
import {Link} from "react-router-dom";

const CTA = () => {
  return (
    <div className='cta'>
        {/* <a href={CV} download className='btn'>Download CV</a> */}
        {/* <a href='/contact'className='btn btn-primary'>Let's Talk</a> */}
        <a href={CV} download>
          <button  className='btn btn-primary'>Download CV</button>
        </a>
        <Link to="/contact">
          <button className='btn btn-primary'>Let's Talk</button>
        </Link>
    </div>
  )
}

export default CTA