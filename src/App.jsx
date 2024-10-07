import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer' ;
import Home from './Home/Home';
import Menu from './Menu/Menu';
import About from './About/About';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Menu/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App

