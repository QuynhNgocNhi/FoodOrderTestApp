import * as actionTypes from './type';

export const fetchData = (payload) => {
    return {
        type: actionTypes.GET_PRODUCT_LIST,
        payload
    }
}
export const showLoading = () => {
    return {
        type: actionTypes.SHOW_LOADING,

    }
}
export const hideLoading = () => {
    return {
        type: actionTypes.HIDE_LOADING,
    }
}