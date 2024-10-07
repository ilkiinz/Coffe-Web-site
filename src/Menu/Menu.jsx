import React from 'react';
import "../index.css";
import spanis_latte from "../assets/spanish-latte.jpg";
const Menu = () => {
  // 12 kart yaratmaq üçün bir array yaradılır
  const products = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
    name: `Apple AirPods ${index + 1}`,
    price: `$${95 + index * 5}.00`,
    image: spanis_latte
  }));

  return (
    <div className="container mx-auto py-8 px-4 z-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 mt-4 h-48 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
              <img
                src={product.image}
                className="h-full w-full object-cover"
                alt={product.name}
              />
            </div>
            <div className="p-6">
              <div className="mb-2 flex items-center justify-between">
                <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                  {product.name}
                </p>
                <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                  {product.price}
                </p>
              </div>
              <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
