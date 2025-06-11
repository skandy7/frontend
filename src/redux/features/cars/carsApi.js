import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import getBaseUrl from '../../../utils/baseURL';

const baseQuery = fetchBaseQuery({
  baseUrl: `${getBaseUrl()}/api/cars`,  // Ensure base URL is correct
  credentials: 'include',  // Include credentials (cookies) if needed
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('token');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const carsApi = createApi({
  reducerPath: 'carsApi',
  baseQuery,
  tagTypes: ['Cars'],
  endpoints: (builder) => ({
    fetchAllCars: builder.query({
      query: () => '/',
      providesTags: ['Cars'],
    }),
    fetchCarsById: builder.query({
      query: (id) => `/${id}`,
      providesTags: (results, error, id) => [{ type: 'Cars', id }],
    }),
    addCar: builder.mutation({
        query: (newCar) => ({
            url: `/create-car`,
            method: "POST",
            body: newCar
        }),
        invalidatesTags: ["Cars"]
    }),
    updateCar: builder.mutation({
        query: ({ id, ...rest }) => ({
            url: `/edit/${id}`,
            method: "PUT",
            body: rest,
            headers: {
                'Content-Type': 'application/json'
            }
        }),
        invalidatesTags: ["Cars"]
    }),
    deleteCar: builder.mutation({
        query: (id) => ({
            url: `/${id}`,
            method: "DELETE"
        }),
        invalidatesTags: ["Cars"]
    })
    
  }),
});

export const { 
    useFetchAllCarsQuery, 
    useFetchCarsByIdQuery, 
    useAddCarMutation, 
    useUpdateCarMutation, 
    useDeleteCarMutation 
} = carsApi;

export default carsApi;
