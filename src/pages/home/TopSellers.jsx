import React, { useEffect, useState } from 'react';
import CarCard from '../cars/CarCard';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { useFetchAllCarsQuery } from '../../redux/features/cars/carsApi';

const categories = ["Choose a Type", "SUV", "Sedan", "Hatchback", "MUV"];

const TopSellers = () => {
  const [selectedCategory, setSelectedCategory] = useState("Choose a Type");
  const { data: cars = [] } = useFetchAllCarsQuery();

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Ensure category matching is case-insensitive
  const filteredCars = selectedCategory === "Choose a Type"
    ? cars
    : cars.filter(car => car.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="py-20 px-4 bg-white text-gray-800">
      {/* Updated Title and Description with Modern Styling */}
      <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-900">
        Already have a car in mind? Skip the wait with our Consultancy Service
      </h2>

      <p className="text-lg text-center mb-12 mx-auto max-w-2xl">
        Skip the long waiting periods of top-selling cars. Our consultancy service provides you with personalized advice and direct delivery, ensuring you get the car of your choice with minimal waiting time and maximum convenience.
      </p>

      <div className="flex justify-center mb-8">
        <select
          onChange={handleCategoryChange}
          name="category"
          id="category"
          className="border bg-white text-gray-800 rounded-md px-6 py-3 focus:outline-none shadow-md hover:ring-2 hover:ring-indigo-500 transition-all duration-300"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          }
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {/* Rendering filtered or random cars */}
        {filteredCars.length > 0 &&
          filteredCars.map((car, index) => (
            <SwiperSlide key={index}>
              <CarCard car={car} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default TopSellers;
