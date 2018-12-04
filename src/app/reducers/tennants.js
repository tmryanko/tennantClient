import { set } from 'lodash/fp';
import AT from 'constants/actionTypes';

export const initialState = {
  tennantList: []
};

const tennantReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.GET_ALL_TENNANTS_SUCCESS: {
      return set('tennantList', action.payload, state);
    }
    case AT.ADD_NEW_TENNANT_SUCCESS: {
      const newArr = [...state.tennantList, action.payload];
      
      return set('tennantList', newArr, state);
    }
    case AT.UPDATE_TENNANT_SUCCESS: {
      const newArr = state.tennantList.filter((item) => {
        return item._id !== action.payload.id;
      });
      const arr = [...newArr, action.payload.tennant];

      return set('tennantList', arr, state);
    }
    case AT.DELETE_TENNANT_SUCCESS: {
      const newArr = state.tennantList.filter((item) => {
        return item._id !== action.payload;
      });

      return set('tennantList', newArr, state);
    }
    default:
      return state;
  }
};

export default tennantReducer;
