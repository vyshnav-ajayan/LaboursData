/*
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as labourListReducer from './labourReducer';
export default Object.assign(loadingReducer, labourListReducer);
