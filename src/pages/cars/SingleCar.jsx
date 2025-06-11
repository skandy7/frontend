import React from 'react';
import { FiShoppingCart } from "react-icons/fi";
import { useParams } from "react-router-dom";

import { getImgUrl } from '../../utils/getImgUrl';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice';
import { useFetchCarsByIdQuery } from '../../redux/features/cars/carsApi';

const SingleCar = () => {
    const { id } = useParams();
    const { data: car, isLoading, isError } = useFetchCarsByIdQuery(id);

    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error occurred while loading car info</div>;

    return (
        <div className="max-w-lg shadow-md p-5">
            <h1 className="text-2xl font-bold mb-6">{car.title}</h1>

            <div>
                <div>
                    <img
                        src={`${getImgUrl(car.coverImage)}`}
                        alt={car.name}
                        className="mb-8"
                    />
                </div>

                <div className="mb-5">
                    <p className="text-gray-700 mb-4">
                        <strong>Added On:</strong> {new Date(car?.createdAt).toLocaleDateString()}
                    </p>
                    <p className="text-gray-700 mb-4 capitalize">
                        <strong>Category:</strong> {car?.category}
                    </p>
                    <p className="text-gray-700">
                        <strong>Description:</strong> {car.description || 'No description available'}
                    </p>
                </div>

                <button
                    onClick={() => handleAddToCart(car)}
                    className="btn-primary px-6 space-x-1 flex items-center gap-1"
                >
                   
                    <span>Consult Now</span>
                </button>
            </div>
        </div>
    );
};

export default SingleCar;
