import React from 'react'
import './Header.scss';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Header() {
const navigate = useNavigate();

  return (<>
    <header className='header'>
        <div
         onClick={()=>navigate('/')}
         className='logo'>Camilo Jorquera</div>
   <nav className='main-nav'>
    <ul className='nav-links-wrap'>
            <NavLink className='link' to='About'>//About</NavLink>
            <NavLink className='link' to='/Projects'>//Projects</NavLink>
  
    </ul>
    
   </nav>
    </header>
    </>)
}

export default Header