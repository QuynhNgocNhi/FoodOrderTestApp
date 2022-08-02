import { put, takeLatest } from 'redux-saga/effects';
import { GET_PRODUCT_LIST, SET_PRODUCT_LIST, SHOW_LOADING, HIDE_LOADING } from './type';
//import API
import { getMasterDataApi } from '../../services/api'

function* getProductList() {
    yield put({ type: SHOW_LOADING })
    const data = yield getMasterDataApi()
    yield put({ type: SET_PRODUCT_LIST, data })
    yield put({ type: HIDE_LOADING })
}
export default function* productSaga() {
    yield takeLatest(GET_PRODUCT_LIST, getProductList);
}