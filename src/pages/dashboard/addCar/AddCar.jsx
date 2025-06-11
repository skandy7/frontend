import React, { useState } from 'react';
import InputField from './InputField';
import SelectField from './SelectField';
import { useForm } from 'react-hook-form';
import { useAddCarMutation } from '../../../redux/features/cars/carsApi';
import Swal from 'sweetalert2';

const AddCar = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [imageFile, setImageFile] = useState(null);
    const [addCar, { isLoading, isError }] = useAddCarMutation();
    const [imageFileName, setImageFileName] = useState('');
    
    const onSubmit = async (data) => {
        const newCarData = {
            ...data,
            coverImage: imageFileName
        };
        try {
            await addCar(newCarData).unwrap();
            Swal.fire({
                title: "Car added",
                text: "Your car is uploaded successfully!",
                icon: "success",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, It's Okay!"
            });
            reset();
            setImageFileName('');
            setImageFile(null);
        } catch (error) {
            console.error(error);
            alert("Failed to add car. Please try again.");
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            setImageFileName(file.name);
        }
    };

    return (
        <div className="max-w-lg mx-auto md:p-6 p-3 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Car</h2>

            {/* Form starts here */}
            <form onSubmit={handleSubmit(onSubmit)} className="">
                {/* Reusable Input Field for Name */}
                <InputField
                    label="Name"
                    name="name"
                    placeholder="Enter car name"
                    register={register}
                />

                {/* Reusable Textarea for Description */}
                <InputField
                    label="Description"
                    name="description"
                    placeholder="Enter car description"
                    type="textarea"
                    register={register}
                />

                {/* Reusable Select Field for Category */}
                <SelectField
                    label="Category"
                    name="category"
                    options={[
                        { value: '', label: 'Choose A Type' },
                        { value: 'sedan', label: 'Sedan' },
                        { value: 'suv', label: 'SUV' },
                        { value: 'hatchback', label: 'Hatchback' },
                        { value: 'muv', label: 'MUV' }
                        // Add more options as needed
                    ]}
                    register={register}
                />

                {/* Trending Checkbox */}
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

                {/* Old Price */}
                <InputField
                    label="Old Price"
                    name="oldPrice"
                    type="number"
                    placeholder="Old Price"
                    register={register}
                />

                {/* New Price */}
                <InputField
                    label="New Price"
                    name="newPrice"
                    type="number"
                    placeholder="New Price"
                    register={register}
                />

                {/* Cover Image Upload */}
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Car Image</label>
                    <input type="file" accept="image/*" onChange={handleFileChange} className="mb-2 w-full" />
                    {imageFileName && <p className="text-sm text-gray-500">Selected: {imageFileName}</p>}
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full py-2 bg-green-500 text-white font-bold rounded-md">
                    {isLoading ? <span className="">Adding.. </span> : <span>Add Car</span>}
                </button>
            </form>
        </div>
    );
};

export default AddCar;
