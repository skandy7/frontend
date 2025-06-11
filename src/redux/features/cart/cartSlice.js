import { createSlice } from "@reduxjs/toolkit";
import  Swal  from "sweetalert2";

const initialState = {
    cartItems: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers:{
        addToCart: (state, action) => {
            const existingItem = state.cartItems.find(item => item._id === action.payload._id);
            if(!existingItem) {
                state.cartItems.push(action.payload)
                Swal.fire({
                    icon: "success",
                    title: "Booking Added",
                    text: " Checkout and confirm your Booking !"
                  });
                
            } else(
                Swal.fire({
                    icon: "error",
                    title: "Car has already been added to Booking",
                    text: " Checkout and confirm your Booking !"
                  })
            )
        },
        removeFromCart: (state, action) => {
            state.cartItems =  state.cartItems.filter(item => item._id !== action.payload._id)
        },
        clearCart: (state) => {
            state.cartItems = []
        }
    }
})

// export the actions   
export const  {addToCart, removeFromCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;