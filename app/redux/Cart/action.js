import * as actionTypes from './type';
// action get data from component productItem
//then action will send data to reducer
//then reducer will store this data in redux Store

export const addToCart = (data) => {
    console.log('ADD_TO_CART action called ' + data);

    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: data.id,
            price: data.price
        },
        data: data


    }
}
export const decreaseQuantity = (data) => {
    console.log('DECREASE_QUANTITY action called ' + data);
    return {
        type: actionTypes.DECREASE_QUANTITY,
        payload: {
            id: data.id,
            price: data.price
        },
        data
    }
}
export const removeFromCart = (data) => {
    console.log('REMOVE_FROM_CART action called ' + data);
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: data.id,

        },

    }
}

