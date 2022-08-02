import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalAmount: 0,
    totalCount: 0
};
const cartData = createSlice({
    name: 'cart',
    initialState,
    reducer: {
        addToCart(state, action) {
            console.log('add to cart reducer called');
            state.cartItems.push(action.payload);
        },
    },
});
export const { addToCart } = cartData.actions;

export default cartData.reducer;