/* eslint-disable */
import React from 'react';
import Logo from '../img/header/k.png'
import Socials from './Socials'
import MobileNav from './MobileNav'
import SignUp from '../pages/Form';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

//import Link
import {Link} from 'react-router-dom'

const Header = () => {
  
  return <header className='fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
    <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
      {/* Logo */}
      <Link to={'/'} className='max-w-[200px]' style={{ position: 'relative', top: '9px', right: '62px' }}>
  <img src="/final_logo.png" alt="Logo"/> 
</Link>

      {/* nav-initialy hidden - show on desktop mode */}
      <nav className='hidden xl:flex gap-x-12 font-semibold'>
        <Link to={'/'} className='text-[#696c6d] hover:text-primary transition'>Home</Link>
        <Link to={'/about'} className='text-[#696c6d] hover:text-primary transition'>About</Link>
        <Link to={'/working'} className='text-[#696c6d] hover:text-primary transition'>Working</Link>
        <Link to={'/signup'} className='text-[#696c6d] hover:text-primary transition'>SignUp</Link>
        <Link to={'/login'} className='text-[#696c6d] hover:text-primary transition'>LogIn</Link>
        <Link to={'/contact'} className='text-[#696c6d] hover:text-primary transition'>Contact</Link>
      </nav>
    </div>
    {/* Horizontal Line
    <div className="w-full h-[2px] bg-black absolute bottom-0 left-0" style={{ marginTop: '10px' 
  }}></div> */}
    
    {/* Socials */}
    <Socials/>
      {/* mobile nav */}
      <MobileNav/>
  </header>;
};

export default Header;
/* eslint-enable */