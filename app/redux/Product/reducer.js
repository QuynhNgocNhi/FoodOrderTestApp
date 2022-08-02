import { SET_PRODUCT_LIST, SHOW_LOADING, HIDE_LOADING } from './type';
// pass action data to reducer
const INITIAL_STATE = {

    products: [],
    showLoading: false,
};
export const productData = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // no need this case cause we have the help of saga with this
        /* case GET_PRODUCT_LIST:
            console.log('GET_PRODUCT_LIST reducer', action);
            return [action.data] */
        case SHOW_LOADING:
            console.log("SHOW_LOADING")
            return {
                ...state,
                showLoading: true
            };
        case HIDE_LOADING:
            console.log("HIDE_LOADING")
            return {
                ...state,
                showLoading: false
            };
        case SET_PRODUCT_LIST:
            return {
                ...state,
                products: [...action.data]
            };

        default:
            return state;
    }
}



