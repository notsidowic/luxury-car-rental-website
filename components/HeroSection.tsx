import React from "react";
import Navbar from "@/components/Navbar";

const HeroSection: React.FC = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/car2.jpg')" }}
    >
      <Navbar />
      <div className="bg-opacity-50 bg-black text-white py-32">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          {/* Left side */}
          <div className="max-w-4xl text-center md:text-left md:w-2/3 md:pr-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Luxury Car Rental
            </h1>
            <p className="text-xl md:text-base mb-8">
              Explore our premium collection of luxury cars for your next
              adventure.
            </p>
            <button className="bg-white text-gray-900 py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
              Get Started
            </button>
          </div>

          {/* Right side */}
          <div className="flex flex-col w-full md:w-1/3 mt-8 md:mt-0">
            <div className="bg-gray-800 rounded-lg p-6 mb-4 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">Premium Cars</h2>
              <p>
                Choose from our handpicked selection of premium cars, including
                luxury sedans and high-performance sports cars.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 mb-4 mt-4 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">VIP Service</h2>
              <p>
                Enjoy VIP treatment with personalized customer service,
                including door-to-door car delivery and 24/7 concierge support.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg mt-4 p-6">
              <h2 className="text-2xl font-bold mb-4">Luxury Experience</h2>
              <p>
                Indulge in the ultimate luxury experience with our exclusive car
                rental service for your special occasions and events.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
