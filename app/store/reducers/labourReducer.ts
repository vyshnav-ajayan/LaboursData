/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';

import { IGamesListState } from 'app/models/reducers/games';
import {
  IGamesListRequestState,
  IGameListResponseState,
} from 'app/models/actions/game';
const initialState: IGamesListState = {
  laboursData: [],
  labourDetails: {},
  completeInitialFetch: false,
};

export const labourListReducer = createReducer(initialState, {
  [types.LABOUR_LIST_REQUEST](state: any, action: any) {
    return {
      ...state,
    };
  },
  [types.LABOUR_LIST_RESPONSE](state: any, action: any) {
    return {
      ...state,
      laboursData: [...action.response],
    };
  },
  [types.LABOUR_LIST_FAILED](state: any) {
    return {
      ...state,
      laboursData: [...state.laboursData],
    };
  },
  [types.LABOUR_DETAILS_REQUEST](state: any, action: any) {
    return {
      ...state,
    };
  },
  [types.LABOUR_DETAILS_RESPONSE](state: any, action: any) {
    return {
      ...state,
      labourDetails: { ...action.response },
    };
  },
  [types.LABOUR_DETAILS_FAILED](state: any) {
    return {
      ...state,
      labourDetails: { ...state.laboursData },
    };
  },
});
