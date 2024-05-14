/* eslint-disable */
import React from 'react';
//import pages
import Home from '../pages/Home'
import About from '../pages/About'
import Working from '../pages/Working'
import SignUp from '../pages/SignUp'
import LogIn from '../pages/LogIn'
import Contact from '../pages/Contact'
import {Routes, Route, useLocation} from 'react-router-dom'

const AnimRoutes = () => {
  return <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/working' element={<Working/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/login' element={<LogIn/>}/>
    <Route path='/contact' element={<Contact/>}/>
  </Routes>;
};

export default AnimRoutes;
/* eslint-enable */