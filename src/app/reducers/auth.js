import { flow, set } from 'lodash/fp';
import AT from 'constants/actionTypes';

export const initialState = {
  userData: {}, userSignedIn: {}, isLogedOut: true, isRememberMe: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.SET_SIGN_UP_SUCCESS: {
      return flow([set('userData', action.payload), set('isLogedOut', false)])(state);
    }
    case AT.SET_SIGN_IN_SUCCESS: {
      return flow([set('userSignedIn', action.payload), set('isLogedOut', false)])(state);
    }
    case AT.LOG_OUT_SUCCESS: {
      return flow([set('userSignedIn', {}), set('isLogedOut', true)])(state);
    }
    case AT.SET_USER_DATA_SUCCESS: {
      return flow([set('userSignedIn', action.payload), set('isLogedOut', false), set('isRememberMe', true)])(state);
    }
    default:
      return state;
  }
};

export default authReducer;
