import { GET_PRODUCT_LIST, SET_PRODUCT_LIST } from './type';
// pass action data to reducer
export const productData = (data = [], action) => {
    switch (action.type) {
        // no need this case cause we have the help of saga with this
        /* case GET_PRODUCT_LIST:
            console.log('GET_PRODUCT_LIST reducer', action);
            return [action.data] */
        case SET_PRODUCT_LIST:
            return [...action.data]

        default:
            return data;
    }
}





export const addToCart = (itemId) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemId,
        }
    }
}
export const removeFromCart = (itemId) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemId,
        }
    }
}
export const adjustQuantity = (itemId, value) => {
    return {
        type: actionTypes.ADJUST_QUANTITY,
        payload: {
            id: itemId,
            quantity: value
        }
    }
}
export const loadItems = (item) => {
    return {
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload: item
    }
}
