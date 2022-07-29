import * as types from './types';
import { ILoginResponse } from 'app/models/api/login';

export function requestLabourList() {
  return {
    type: types.LABOUR_LIST_REQUEST,
  };
}

export function labourListRequestFailed() {
  return {
    type: types.LABOUR_LIST_FAILED,
  };
}

export function labourListResponse(response: ILoginResponse) {
  return {
    type: types.LABOUR_LIST_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.DISABLE_LOADER,
  };
}

export function requestLabourDetails() {
  return {
    type: types.LABOUR_DETAILS_REQUEST,
  };
}

export function labourDetailsRequestFailed() {
  return {
    type: types.LABOUR_DETAILS_FAILED,
  };
}

export function labourDetailsResponse(response: any) {
  return {
    type: types.LABOUR_DETAILS_RESPONSE,
    response,
  };
}
