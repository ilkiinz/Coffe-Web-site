import React from 'react';
import "../index.css";
import place1 from "../assets/place1.jpg";

const About = () => {
  return (
    <div>
      <section className="bg-gray-100" id="aboutus">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            
            {/* Şəkil Sol Tərəfdə */}
            <div className="w-full md:w-1/2">
              <img src={place1} alt="place" className="shadow-lg rounded" />
            </div>
            
            {/* Yazılar Sağ Tərəfdə */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center md:text-left">
                About Us
              </h2>
              <p className="mt-4 text-gray-600 text-lg">
                Bappa flour mill provides our customers with the highest quality products and services. 
                We offer a wide variety of flours and spices to choose from, and we are always happy to help our customers find the perfect products for their needs.
                We are committed to providing our customers with the best possible experience. We offer competitive prices, fast shipping, and excellent customer service.
                We are also happy to answer any questions that our customers may have about our products or services.
                If you are looking for a flour and spices service business that can provide you with the highest quality products and services, then we are the company for you.
                We look forward to serving you!
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default About;


