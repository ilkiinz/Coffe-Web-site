import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer' ;
import Home from './Home/Home';
import About from './About/About';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App

