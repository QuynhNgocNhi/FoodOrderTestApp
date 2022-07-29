import { combineReducers } from '@reduxjs/toolkit';
import { cartData } from './Cart/reducer';
import { productData } from './Product/reducer';

const rootReducer = combineReducers({
    cartData,
});

export default rootReducer;