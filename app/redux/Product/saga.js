import { takeEvery } from 'redux-saga/effects';
import { GET_PRODUCT_LIST } from './type';

function* getProductList() {

    console.log('getProductList Saga is called');
}
export default function* productSaga() {
    console.log('productSaga');
    yield takeEvery(GET_PRODUCT_LIST, getProductList);
}