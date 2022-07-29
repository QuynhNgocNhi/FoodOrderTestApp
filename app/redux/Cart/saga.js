import * as actionTypes from './type';
import { PayloadAction } from '@reduxjs/toolkit';
import { takeEvery } from 'redux-saga/effects';
import { getFoods } from '../../services/api';
import { addProduct } from './slice';


/* function* getDataMasterSideEffect() {
    try {
        const response = yield call(getFoods);
        yield put(addProduct(response));
    } catch (error) {
        yield put(addProduct(error));
    }
} */

export default function* cartSaga() {
    console.log('cartSaga');
    //yield takeEvery('*', log);
}