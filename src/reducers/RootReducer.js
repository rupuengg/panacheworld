import { combineReducers } from "redux";
import bannerReducer from './bannerReducer';
import offerReducer from './offerReducer';
import globalReducer from './globalReducer';
import projectReducer from './projectReducer';

const combindedReducer = combineReducers({
  bannerReducer,
  offerReducer,
  globalReducer,
  projectReducer,
});

export default combindedReducer;