import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['navigation']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
    reducer: rootReducer,
    middleware: [
        ...getDefaultMiddleware({
            thunk: false,

        }),
        sagaMiddleware,
    ],
});

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
export default store;
