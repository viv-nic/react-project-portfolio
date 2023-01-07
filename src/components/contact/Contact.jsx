import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pge54ow', 'template_b2ewbpo', form.current, 'ACReywAI_A31ptX1X')
    
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>vivianhltan@gmail.com</h5>
            <a href="mailto:vivianhltan@gmail.com" rel="noreferrer" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+61234567890</h5>
            <a href="https://whatsapptools.app/?n=610422299854" rel="noreferrer" target="_blank">Send a message</a>
            {/* https://api.whatsapp.com/send?phone=+61422299854 */}
          </article>
          
          {/* <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>+61234567890</h5>
            <a href="https://api.whatsapp.com/send?phone=+61422299854" rel="noreferrer" target="_blank">Send a message</a>
          </article> */}
        </div>

        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>

      <a href='#' className='scroll__up'>Scroll Up</a>

    </section>
  )
}

export default Contact