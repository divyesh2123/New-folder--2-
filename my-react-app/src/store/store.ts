import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../slice/counterslice'
import userReducer from '../slice/userslice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/index';
import productInfo from '../slice/productslice';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore<{
    counter: ReturnType<typeof counterReducer>;
    userInfo: ReturnType<typeof userReducer>;
    product: ReturnType<typeof productInfo>;
}>({
    reducer: {
        counter:counterReducer,
        userInfo:userReducer,
        product:productInfo
       
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),    
});

sagaMiddleware.run(rootSaga);
//view->action->reducer->store
export default store;