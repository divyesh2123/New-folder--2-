import { all } from "redux-saga/effects";
import { watcherIncrementCounterSaga } from "./countersaga";
import watcherproductSaga from "./productsaga";

function* rootSaga() {
  yield all([
    watcherIncrementCounterSaga(),
    watcherproductSaga()
    
  ]);
}

export default rootSaga;    