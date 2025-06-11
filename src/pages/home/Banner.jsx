import React from 'react';
import { Link } from 'react-router-dom'; // Keep this import if you need it for other links
import bannerImg from "../../assets/bannerfinal.png";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-16 px-4 md:px-16 gap-12">
      {/* Image Section */}
      <div className="md:w-1/2 w-full flex items-center justify-center md:justify-end">
        <img src={bannerImg} alt="Car Consultancy Banner" className="max-w-full h-auto rounded-lg shadow-lg" />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 w-full text-center md:text-left">
        <h1 className="md:text-5xl text-3xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
          ABOUT US
        </h1>

        <p className="text-lg text-gray-700 mb-8 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
          At <span className="font-extrabold text-blue-600">7 CRORE CAR CONSULTANCY</span>, we make car buying hassle-free and convenient. Our mission is simple: to help you find the perfect car with minimal effort. All we need from you is to tell us your requirements, and we’ll take care of the rest.
        </p>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
          With us, you only need to visit once for a test drive. After that, we’ll handle all the details and bring the car directly to you for delivery—no need to visit multiple times. Whether it’s paperwork or signatures, we come to your doorstep, ensuring a smooth and seamless process.
        </p>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
          We believe in providing exceptional service with a focus on customer convenience. Simply pay a minimal amount to get started, and we’ll guide you every step of the way to make your car buying experience as easy and stress-free as possible.
        </p>

        {/* Subscribe Button Linking to Email */}
        <a href="mailto:1dt22ic016@dsatm.edu.in">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-md shadow-md transition duration-300">
            ENQUIRE NOW
          </button>
        </a>
      </div>
    </div>
  );
};

export default Banner;
