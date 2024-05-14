/* eslint-disable */
import React from 'react';
//import components
import Header from './components/Header'
import AnimRoutes from './components/AnimRoutes'
//import Router
import {BrowserRouter as Router} from 'react-router-dom'
//import motion
import {motion} from 'framer-motion'
import Home from './pages/Home';
const App = () => {
  return <>
    <Router>
      <Header/>
      <AnimRoutes/>
    </Router>
  </>;
};

export default App;
/* eslint-enable */