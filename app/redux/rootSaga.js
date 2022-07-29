import cartSaga from './Cart/saga';
import productSaga from './Product/saga';
import { all } from 'redux-saga/effects';


function* rootSaga() {
    yield all([
        cartSaga(),
        productSaga(),
    ]);

}
export default rootSaga;