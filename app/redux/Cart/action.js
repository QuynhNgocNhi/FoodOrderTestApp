import * as actionTypes from './type';
// action get data from component productItem
//then action will send data to reducer
//then reducer will store this data in redux Store

export const addToCart = (product) => {
    console.log('ADD_TO_CART action called' + product);

    return {
        type: actionTypes.ADD_TO_CART,
        data: product
    }
}
export const removeFromCart = (product) => {
    console.log('REMOVE_FROM_CART action called' + product);
    return {
        type: actionTypes.REMOVE_FROM_CART,
        data: product
    }
}