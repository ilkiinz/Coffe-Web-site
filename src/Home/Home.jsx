import React from 'react';
import backimg from "../assets/home-background.jpg";

const Home = () => {

    
  return (
    <section className="flex h-screen w-full mt-16 bg-gray-200">

      <div className='w-1/2 my-auto text-center'>
        
        <h1 className="text-3xl font-roboto font-medium">Kofe icmekten Hezz Al !</h1>
        <br />
        <br />
        <p className='text-2xl font-serif font-normal'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur perspiciatis odio animi 
          aliquam molestiae labore fuga impedit totam fugiat
           optio reprehenderit porro dolorum expedita mollitia, dicta minima pariatur debitis quo.
        </p>

      </div>
      
      <div className="w-1/2 bg-cover bg-center" 
           style={{ backgroundImage: `url(${backimg})` }}>
      </div>
    </section>
  );
}

export default Home;
