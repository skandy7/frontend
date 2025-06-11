import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules'; // Import Autoplay

// import news1 from "../../assets/news/news-1.jpg";
import news2 from "../../assets/news/news-2.jpg";
import news3 from "../../assets/news/news-3.jpg";
import news4 from "../../assets/news/news-4.jpg";
import { Link } from 'react-router-dom';

const news = [
  {
    id: 1,
    title: "Electric Vehicles Drive the Future of Transportation",
    description:
      "Global automotive leaders discuss the transition to electric vehicles, focusing on sustainable solutions, improved battery technology, and the future of zero-emission transportation.",
    image: news4,
  },
  {
    id: 2,
    title: "Breakthrough in Autonomous Driving Technology",
    description:
      "A major breakthrough in autonomous driving technology has been announced, with innovations that promise to enhance safety and redefine the driving experience.",
    image: news2,
  },
  {
    id: 3,
    title: "New Sports Car Model Sets Speed Records",
    description:
      "A leading car manufacturer has unveiled a new sports car model, designed for speed enthusiasts, with record-breaking performance and cutting-edge aerodynamics.",
    image: news3,
  },
  {
    id: 4,
    title: "Global Car Sales Reach New Highs Amid Economic Recovery",
    description:
      "Car sales across the globe have surged to record highs as consumers return to showrooms, driven by economic recovery and new model releases.",
    image: news4,
  },
  {
    id: 5,
    title: "Innovative Electric SUV Released by Leading Auto Brand",
    description:
      "A leading auto brand has released its latest electric SUV, featuring extended range, advanced safety features, and a sleek new design tailored for families and adventurers alike.",
    image: news2,
  },
];

const News = () => {
  return (
    <div className="py-16">
      <h2 className="text-3xl font-semibold mb-6">News</h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000, // Slide will change every 3 seconds
          disableOnInteraction: false, // Autoplay will not stop after user interaction
        }}
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
        }}
        modules={[Pagination, Navigation, Autoplay]} // Added Autoplay module
        className="mySwiper"
      >
        {news.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-12">
              {/* Content */}
              <div className="py-4">
                <Link to="/">
                  <h3 className="text-lg font-medium hover:text-blue-500 mb-4">
                    {item.title}
                  </h3>
                </Link>
                <div className="w-12 h-[4px] bg-primary mb-5"></div>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>

              {/* Image */}
              <div className="flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default News;
