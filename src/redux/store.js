import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'
import carsApi from './features/cars/carsApi'
import ordersApi from './features/orders/ordersApi'

export const store = configureStore({
  reducer: {
    cart : cartReducer,
    [carsApi.reducerPath]: carsApi.reducer,
    [ordersApi.reducerPath]:ordersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(carsApi.middleware,ordersApi.middleware),
})