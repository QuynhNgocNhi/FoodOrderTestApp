/* import * as actionTypes from './type';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    cart: [],
    currentCart: null
};
const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addProduct: (state, action) => {
            console.log("addProduct")
            state.ids.push(action.payload.id);
        },
        removeProduct: (state, action) => {
            //remove item = splice 

            state.ids.splice(state.ids.indexOf(action.payload.id), 1);
        }
    }
});
const { actions, reducer } = cartSlice;

export const {
    addProduct,
    removeProduct


} = actions;
 */




export default reducer;