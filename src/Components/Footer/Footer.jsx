import React from 'react';
import './Footer.scss';
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { useNavigate } from 'react-router';

function Footer() {
    const navigate = useNavigate();
  return (
    <div className='footer'>
        <div className='footer-box-one'>
            <h3 
            onClick={()=> navigate('/')}
            className='footer-name'>
                Camilo Jorquera </h3>
            <p>© 2024 Camilo Jorquera</p>
        </div>
        <div className='footer-box-two'>
                <a className='footer-icon' href='https://github.com/Milo00123'><FaGithub /></a>
                <a className='footer-icon' href='https://www.linkedin.com/in/camilo-jorquera-cbj/' ><FaLinkedin /></a>
        </div>
    </div>
  )
}

export default Footer