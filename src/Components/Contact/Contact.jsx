import React, { useState } from 'react'
import './Contact.scss';
import emailjs from '@emailjs/browser';
import { useRef} from 'react';
import { useNavigate } from 'react-router';
import { MdError } from "react-icons/md";
import { MdMarkEmailRead } from "react-icons/md";



function Contact() {
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage]= useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(null);
    const navigate = useNavigate()
    const form = useRef();
    const emailFilter = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



    const Validation = () => {
      const errors = {}; 
      if ( !name && !subject && !email && !message) {
        errors.allFields = 'All fields are required ';
        setTimeout(() => {
            setError('');
          }, 3000);
        return errors;
       }
      if (!email){errors.email = ' Email is needed'; 
      } else if (!emailFilter.test(email))errors.email = 'Enter a valid Email Address ';  
      if (!name) errors.name = ' Full Name is Needed '; 
      if (!subject) errors.subject = ' Subject is needed ';     
      if (!message) 
        errors.message = ' Message Needed ';
      setTimeout(() => {
        setError('');
      }, 3000);
      return errors;
    };
    const sendEmail = (e) => {
      e.preventDefault();
      const validError = Validation();
      if (Object.keys(validError).length > 0) {
        setError(validError);
        return;
      }
      emailjs
        .sendForm('service_vf1ut6f', 'template_vy9bghc', form.current, {
          publicKey: 'hLI_ZKwY_cst1r8Ps',
        })
        .then(
          () => {
            setSuccess(' Message Sent! ')

            setTimeout(()=> navigate('/'), 4000)
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };


  return (
    <div className='contact'>
        <h1 className='contact-camilo-title'>Contact me</h1>
 
        {success && <div className="success-message">Redirecting to home page...<MdMarkEmailRead className='success-icon' />
            {success}</div>}
        {error && 
            <p className='form-error'><MdError className='error-icon' /> 

              {typeof error === 'object' ? error.allFields || error.name || error.subject || error.email || error.message : error}
        
              </p>} 
        <form ref={form} onSubmit={sendEmail} className='camilo-form'>
            <input  type='text'
                    className='form-input'
                    name="user_name"
                    placeholder='Full Name'
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
            ></input>
                <input  type='text'
                    className='form-input'
                    name="user_subject"
                    placeholder='Subject'
                    value={subject}
                    onChange={(e)=> setSubject(e.target.value)}
            ></input>

            <input  type='text'
                    className='form-input'
                    placeholder='Email'
                    name="user_email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
            ></input>

            <textarea  
                type='text'
                name="message"
                className='form-input form-input__textarea'
                placeholder='Message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
           ></textarea>
           <button className='send-btn' type='submit' value='Send'>SEND</button>
        </form>
    </div>
  )
}

export default Contact