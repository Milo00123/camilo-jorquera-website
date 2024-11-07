import React, { useState } from 'react'
import './Header.scss';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";
import { MdClose } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

function Header() {
const navigate = useNavigate();
const [isVisible, setIsVisible] =useState(false)


 const showMenu = () =>{
    setIsVisible(!isVisible);
 }
 const closeMenu = () => {
    setIsVisible(false);
  };
  const handleNavigation = (path) => {
    navigate(path);         
    window.scrollTo(0, 0);  
    closeMenu(); 
  };
  return (<>
    <header className='header'>
        <div
         onClick={()=>handleNavigation('/')}
         className='logo'>Camilo Jorquera</div>
   <nav className='main-nav'>

    <ul className={`nav-links-wrap ${isVisible ? 'visible' : ''}`}>
            <NavLink
             className='link' to='About'
             onClick={()=> handleNavigation()} >
                <span className='arrow-name'><MdArrowForwardIos /></span>
                <span className='link__name'>About</span>
                
             </NavLink>
            <NavLink 
            className='link'
            onClick={()=>handleNavigation()}
             to='/Projects'>
                 <span className='arrow-name'><MdArrowForwardIos /></span>
             <span className='link__name'>Projects</span>
                </NavLink>
                <NavLink 
            className='link'
            onClick={()=> handleNavigation()}
             to='/Contact'>
                 <span className='arrow-name'><MdArrowForwardIos /></span>
             <span className='link__name'>Contact</span>
                </NavLink>

    </ul>
    <button className='header-btn' onClick={showMenu}>
    <TiThMenu className={`menu-icon ${!isVisible ? 'visible' : ''}`} />
    <MdClose className={`close-icon ${isVisible ? 'visible' : ''}`} />
        </button>
   </nav>
    </header>
    </>)
}

export default Header