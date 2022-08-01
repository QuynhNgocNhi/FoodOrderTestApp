import * as actionTypes from './type';

export const fetchData = () => {
    return {
        type: actionTypes.GET_PRODUCT_LIST,
    }
}