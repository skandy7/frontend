import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import CarCard from '../cars/CarCard';
import { useFetchAllCarsQuery } from '../../redux/features/cars/carsApi';

const Recommend = () => {
  const { data: cars = [], isLoading, isError } = useFetchAllCarsQuery();

  if (isLoading) return <div>Loading cars...</div>;
  if (isError) return <div>Error fetching cars</div>;

  const displayedCars = cars.length > 8 ? cars.slice(8, 18) : cars;

  return (
    <div className="py-16">
      <h2 className="text-3xl font-semibold mb-6">Top sellers</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 40 },
          1024: { slidesPerView: 2, spaceBetween: 50 },
          1180: { slidesPerView: 3, spaceBetween: 50 },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {displayedCars.length > 0 ? (
          displayedCars.map((car, index) => (
            <SwiperSlide key={index}>
              <CarCard car={car} />
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <div>No cars available</div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

export default Recommend;
