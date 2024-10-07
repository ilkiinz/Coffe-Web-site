import React from 'react';
import "../index.css";
import spanis_latte from "../assets/spanish-latte.jpg";
import cake from "../assets/cake.jpg"; 

const Menu = () => {

  const drinks = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
    name: `Spanish Latte ${index + 1}`,
    price: `$${3 + index * 5}.25`,
    image: spanis_latte
  }));

  
  const foods = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
    name: `Food Item ${index + 1}`,
    price: `$${5 + index * 3}.50`,
    image: cake 
  }));

  return (
    <div className="py-32 px-8 z-0 bg-slate-50 w-full">
      <h2 className="text-3xl font-bold mb-8 text-center">İçkiler</h2>
      <div className="flex flex-wrap justify-between gap-12 mb-16">
        {drinks.map(drink => (
          <div key={drink.id} className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <div className="relative mx-4 mt-4 h-48 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
              <img
                src={drink.image}
                className="h-full w-full object-cover"
                alt={drink.name}
              />
            </div>
            <div className="p-6">
              <div className="mb-2 flex items-center justify-between">
                <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                  {drink.name}
                </p>
                <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                  {drink.price}
                </p>
              </div>
              <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.
              </p>
            </div>
          </div>
        ))}
      </div>

      
      <h2 className="text-3xl font-bold mb-8 text-center">Sirniyyatlar</h2>
      <div className="flex flex-wrap justify-between gap-12">
        {foods.map(food => (
          <div key={food.id} className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <div className="relative mx-4 mt-4 h-48 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
              <img
                src={food.image}
                className="h-full w-full object-cover"
                alt={food.name}
              />
            </div>
            <div className="p-6">
              <div className="mb-2 flex items-center justify-between">
                <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                  {food.name}
                </p>
                <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                  {food.price}
                </p>
              </div>
              <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                Description of the food item goes here.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
