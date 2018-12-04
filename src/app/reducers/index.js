import { combineReducers } from 'redux';
import toasterReducer from './notifications';
import authReducer from './auth';
import tennantReducer from './tennants';


const rootReducer = combineReducers({
  toasterReducer,
  authReducer,
  tennantReducer
});

export default rootReducer;
