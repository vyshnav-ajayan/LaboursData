/**
 *  Redux saga class init
 */
import { takeEvery, all } from 'redux-saga/effects';
import * as types from '../actions/types';
import * as labourSaga from './labourSaga';

export default function* watch() {
  yield all([takeEvery(types.LABOUR_LIST_REQUEST, labourSaga.labourAsync)]);
  yield all([
    takeEvery(types.LABOUR_DETAILS_REQUEST, labourSaga.labourDetailsAsync),
  ]);
}
