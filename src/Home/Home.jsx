import React from 'react';
import backimg from "../assets/home-background.jpg";

const Home = () => {
  return (
    <section className="flex h-screen w-full">

      <div className='w-1/2 bg-white flex justify-center pt-12'>
        
        <h1 className="text-3xl font-bold">Lorem ipsum dolor sit !</h1>

      </div>
      
      <div className="w-1/2 bg-cover bg-center" 
           style={{ backgroundImage: `url(${backimg})` }}>
      </div>
    </section>
  );
}

export default Home;
