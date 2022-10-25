import React,  { useRef }  from 'react'
import "./contact.css"
import {GoMail} from "react-icons/go"
import {BsFacebook} from "react-icons/bs"
import {BsWhatsapp} from "react-icons/bs"
import emailjs from "emailjs-com"


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l9e3qdf', 'template_asviwj5', form.current, 'pOm_xSQpEdo99VWds')
    e.target.reset()
      // .then((result) => {
      //     console.log(result.text);
      // }, (error) => {
      //     console.log(error.text);
      // });
  };
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
     <h2>contact</h2>
      <p className='text-light center'>Call: +2347 035 295 095</p>
     <div className='container contact__container'>
      <div className="contact__options">
        <article className="contact__option">
            
        <GoMail className='contact__option-icons'/>
        <h4>Email</h4>
        <h5>myemail.com</h5>
        <a href="mailto:johnagbudumhe@gmail.com" rel="noreferrer" target='_blank'>
          send a massage
        </a>

        </article>

        <article className="contact__option">
            
            <BsWhatsapp className='contact__option-icons'/>
            <h4>
              Whatsapp
            </h4>
            <h5>mywhatsapp</h5>
            <a href="https://api.whatsapp.com/send?phone=+2349029943550" rel="noreferrer" target='_blank'>
              send a massage
            </a>
    
            </article>

            <article className="contact__option">
            
            <BsFacebook className='contact__option-icons'/>
            <h4>Messenger</h4>
            <h5>my facebook name</h5>
            <a href="https://m.me/john.agbudumhe" rel="noreferrer" target='_blank'>
              send a massage
            </a>
    
            </article>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your name' />

        <input type="email" name='name' placeholder='Your name' />

        <textarea name="message" id="" cols="30" rows="10"></textarea>
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
     </div>
      </section>
  )
}

export default Contact