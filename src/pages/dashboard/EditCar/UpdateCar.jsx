import React, { useEffect } from 'react';
import InputField from '../addCar/InputField';
import SelectField from '../addCar/SelectField';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useFetchCarsByIdQuery, useUpdateCarMutation } from '../../../redux/features/cars/carsApi';
import Loading from '../../../components/Loading';
import Swal from 'sweetalert2';
import axios from 'axios';
import getBaseUrl from '../../../utils/baseURL';

const UpdateCar = () => {
  const { id } = useParams();
  const { data: carData, isLoading, isError, refetch } = useFetchCarsByIdQuery(id);
  const [updateCar] = useUpdateCarMutation();
  const { register, handleSubmit, setValue, reset } = useForm();

  useEffect(() => {
    if (carData) {
      setValue('name', carData.name);
      setValue('description', carData.description);
      setValue('category', carData?.category);
      setValue('trending', carData.trending);
      setValue('oldPrice', carData.oldPrice);
      setValue('newPrice', carData.newPrice);
      setValue('coverImage', carData.coverImage);
    }
  }, [carData, setValue]);

  const onSubmit = async (data) => {
    const updateCarData = {
      name: data.name,
      description: data.description,
      category: data.category,
      trending: data.trending,
      oldPrice: Number(data.oldPrice),
      newPrice: Number(data.newPrice),
      coverImage: data.coverImage || carData.coverImage,
    };
    try {
      await axios.put(`${getBaseUrl()}/api/cars/edit/${id}`, updateCarData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      Swal.fire({
        title: "Car Updated",
        text: "Your car is updated successfully!",
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, It's Okay!"
      });
      await refetch();
    } catch (error) {
      console.log("Failed to update car.");
      alert("Failed to update car.");
    }
  };

  if (isLoading) return <Loading />;
  if (isError) return <div>Error fetching car data</div>;

  return (
    <div className="max-w-lg mx-auto md:p-6 p-3 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Update Car</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Name"
          name="name"
          placeholder="Enter car name"
          register={register}
        />

        <InputField
          label="Description"
          name="description"
          placeholder="Enter car description"
          type="textarea"
          register={register}
        />

        <SelectField
          label="Category"
          name="category"
          options={[
            { value: '', label: 'Choose A Category' },
            { value: 'sedan', label: 'Sedan' },
            { value: 'suv', label: 'SUV' },
            { value: 'hatchback', label: 'Hatchback' },
            { value: 'muv', label: 'MUV' },
            // { value: 'electric', label: 'Electric' },
          ]}
          register={register}
        />
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              {...register('trending')}
              className="rounded text-blue-600 focus:ring focus:ring-offset-2 focus:ring-blue-500"
            />
            <span className="ml-2 text-sm font-semibold text-gray-700">Trending</span>
          </label>
        </div>

        <InputField
          label="Old Price"
          name="oldPrice"
          type="number"
          placeholder="Old Price"
          register={register}
        />

        <InputField
          label="New Price"
          name="newPrice"
          type="number"
          placeholder="New Price"
          register={register}
        />

        <InputField
          label="Car Image URL"
          name="coverImage"
          type="text"
          placeholder="Car Image URL"
          register={register}
        />

        <button type="submit" className="w-full py-2 bg-blue-500 text-white font-bold rounded-md">
          Update Car
        </button>
      </form>
    </div>
  );
};

export default UpdateCar;
