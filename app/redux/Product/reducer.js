import { SET_PRODUCT_LIST } from './type';
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



