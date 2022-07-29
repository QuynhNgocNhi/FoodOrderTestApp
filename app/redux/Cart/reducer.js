import { ADD_TO_CART, REMOVE_FROM_CART } from './type';
// pass action data to reducer
export const cartData = (data = [], action) => {
    console.log('Hello reducer  ', data)
    switch (action.type) {
        case ADD_TO_CART:
            console.log('ADD_TO_CART reducer', action.data);

            return [action.data, ...data]
        //if u want to count all of every data
        //return [action.data, ...data]


        case REMOVE_FROM_CART:
            console.log('REMOVE_FROM_CART reducer', action.data);
            //data = data.splice(data.indexOf(action.data.id), 1);
            data.length = data.length ? data.length - 1 : [];
            return [...data]



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
