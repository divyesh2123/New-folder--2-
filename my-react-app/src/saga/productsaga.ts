import { call, put, takeLatest, takeLeading } from 'redux-saga/effects';
import productService from '../service/productservice';
import { requestProducts, requestProductsFailure, requestProductsSuccess } from '../slice/productslice';


export* from 'redux-saga/effects';

export function* fetchProducts() {  
    try
    {
    const data = yield call(productService);
        yield put(requestProductsSuccess(data));
    }
    catch(error)
    {
        yield put(requestProductsFailure(error));
    }
}


export default function* watcherproductSaga() {

    yield takeLeading(requestProducts.type, fetchProducts);
}


