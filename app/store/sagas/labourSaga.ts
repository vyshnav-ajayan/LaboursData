/* Redux saga
 */
import { put, call } from 'redux-saga/effects';

import * as labourActions from 'app/store/actions/labourActions';
import { getLabourList, getLabourDetails } from 'app/services/labours';

// Our worker Saga that list labours
export function* labourAsync() {
  yield put(labourActions.enableLoader());

  const response = yield call(getLabourList);

  if (response?.data) {
    yield put(labourActions.labourListResponse(response.data?.labours));
    yield put(labourActions.disableLoader());
  } else {
    yield put(labourActions.labourListRequestFailed());
    yield put(labourActions.disableLoader());
  }
}

export function* labourDetailsAsync() {
  yield put(labourActions.enableLoader());

  const response = yield call(getLabourDetails);
  if (response?.data) {
    yield put(labourActions.labourDetailsResponse(response.data?.labour));
    yield put(labourActions.disableLoader());
  } else {
    yield put(labourActions.labourDetailsRequestFailed());
    yield put(labourActions.disableLoader());
  }
}
