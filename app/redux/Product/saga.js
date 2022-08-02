import { takeEvery, put, takeLatest } from 'redux-saga/effects';
import { GET_PRODUCT_LIST, SET_PRODUCT_LIST } from './type';
//import API
import { getMasterDataApi } from '../../services/api'

function* getProductList() {
    const data = yield getMasterDataApi()
    yield put({ type: SET_PRODUCT_LIST, data })
}
export default function* productSaga() {
    yield takeLatest(GET_PRODUCT_LIST, getProductList);
}