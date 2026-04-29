import { all, takeEvery,delay, put, takeLatest } from 'redux-saga/effects';
import { increment } from '../slice/counterslice';

//sagawatchfuncton->depedencyfunction->action->reducer->store

export function* IncrementcounterSaga() {
    yield delay(1000);
    yield put(increment())

}

export function* watcherIncrementCounterSaga() {

    yield takeLatest('INCREMENT_COUNTER_Asyc', IncrementcounterSaga);
}

