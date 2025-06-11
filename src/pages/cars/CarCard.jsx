import React from 'react';
// import { FiShoppingCart } from 'react-icons/fi';
import { getImgUrl } from '../../utils/getImgUrl';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice';

const CarCard = ({ car }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="rounded-lg transition-shadow duration-300 shadow-md hover:shadow-lg bg-white text-gray-900">
      <div className="flex flex-col sm:flex-row sm:items-center sm:h-72 sm:justify-center gap-4 p-4 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 rounded-lg">
        <div className="sm:h-72 sm:flex-shrink-0 border border-gray-300 rounded-md overflow-hidden shadow-md">
          <Link to={`cars/${car._id}`}>
            <img
              src={`${getImgUrl(car?.coverImage)}`}
              alt={car.title}
              className="w-full h-full object-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-300"
            />
          </Link>
        </div>

        <div className="flex flex-col justify-between">
          <Link to={`cars/${car._id}`}>
            <h3 className="text-2xl font-semibold text-gray-900 hover:text-indigo-500 mb-3 transition-colors duration-200">
              {car.title}
            </h3>
          </Link>
          <p className="text-gray-600 text-sm mb-5">
            {car?.description.length > 80 ? `${car.description.slice(0, 80)}...` : car.description}
          </p>
          <p className="font-medium text-gray-800 mb-5">
            ₹{car?.newPrice}{' '}
            <span className="line-through font-normal text-gray-500 ml-2">₹{car?.oldPrice}</span>
          </p>
          <button
            onClick={() => handleAddToCart(car)}
            className="bg-indigo-500 text-white px-6 py-2 rounded-md flex items-center justify-center gap-2 transition-transform duration-200 hover:scale-105 hover:bg-indigo-600 font-bold"
          >
            <span>Consult Now</span>
            {/* <FiShoppingCart /> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
