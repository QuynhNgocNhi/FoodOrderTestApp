import { put, takeLatest, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { GET_PRODUCT_LIST, SET_PRODUCT_LIST, SHOW_LOADING, HIDE_LOADING } from './type';
//import API
import { getMasterDataApi } from '../../services/api'
import axios from 'axios';
const BASE_URL = 'https://gist.githubusercontent.com/trandongtam/21b7633d121e6e72d1afcc603f484fe5/raw/f9e8558f62d854715fc63fc9eafaafb78d68e7c8/data.json'

/* function* getProductList() {
    yield put({ type: SHOW_LOADING })
    const data = yield getMasterDataApi()
    yield put({ type: SET_PRODUCT_LIST, data })
    yield put({ type: HIDE_LOADING })
} */

function* getProductList(action) {
    yield put({ type: SHOW_LOADING })
    const { onError } = action.payload
    try {
        const response = yield axios.get(`${BASE_URL}`);
        const data = response.data
        yield put({ type: SET_PRODUCT_LIST, data })
    } catch (error) {
        console.log(error)
        onError(error?.message)
    }
    yield put({ type: HIDE_LOADING })

}
export default function* productSaga() {
    yield takeLatest(GET_PRODUCT_LIST, getProductList);
}