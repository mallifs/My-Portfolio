import React from 'react'
import "./contact.css"
import {AiOutlineMail} from 'react-icons/ai'
import { FaXTwitter } from "react-icons/fa6";
import {SiWhatsapp} from 'react-icons/si'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ojcf22d', 'template_tpmzm3b', form.current, '1GnPFN6kcleLf31Gc')
    e.target.reset()
      
  };
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
            <article className="contact__option">
              <AiOutlineMail className='contact__option-icon'/>
              <h4>Email</h4>
              {/* <h5>Simintei's support</h5> */}
              <a href="mailto:l02511138@gmail.com" target='_blank'  rel="noopener noreferrer">Send a message</a>
            </article>

            <article className="contact__option">
               <FaXTwitter  className='conatact__option-icon'/>
              <h4>X</h4>
              <a href="https://x.com/sleon_?s=21" target='_blank' rel="noopener noreferrer">Send a message</a>
            </article>


            <article className="contact__option">
              <SiWhatsapp className='contact__option-icon'/>
              <h4>Whatsapp</h4>
              {/* <h5>App Me</h5> */}
              <a href="https://api.whatsapp.com/send?phone+ " target='_blank' rel="noopener noreferrer">Send a message</a>
            </article>
        </div>

{/* =========END OF CANTACT OPTIONS=========== */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full name' required />
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="10" placeholder='Your Message' required></textarea>
          <button className='btn btn-primary'>Send Message</button>
        </form>


      </div>
    </section>
  )
}

export default Contact