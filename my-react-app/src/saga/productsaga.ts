import { call, put, takeLeading } from 'redux-saga/effects';
import productService from '../service/productservice';
import { requestProducts, requestProductsFailure, requestProductsSuccess } from '../slice/productslice';

export function* fetchProducts(): Generator<any, void, any> {  
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


