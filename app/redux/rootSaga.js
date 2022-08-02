import productSaga from './Product/saga';
import { all } from 'redux-saga/effects';


function* rootSaga() {
    yield all([

        productSaga(),
    ]);

}
export default rootSaga;