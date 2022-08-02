import * as actionTypes from './type';

export const fetchData = () => {
    return {
        type: actionTypes.GET_PRODUCT_LIST,
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