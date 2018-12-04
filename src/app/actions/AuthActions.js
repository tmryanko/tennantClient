import axios from 'axios';
import AT from 'constants/actionTypes';

const URL = 'http://localhost:3000/api/auth';

const setSignUpSuccess = (data) => ({
  type: AT.SET_SIGN_UP_SUCCESS,
  payload: data.data
});
const setSignInSuccess = (data) => ({
  type: AT.SET_SIGN_IN_SUCCESS,
  payload: data.data
});
const logoutSuccess = (data) => ({
  type: AT.LOG_OUT_SUCCESS,
  payload: data
});
const setToLocalStorgeSuccess = (data) => ({
  type: AT.SET_TO_LOCAL_STORAGE_SUCCESS,
  payload: data
});
const setUserData = (data) => ({
  type: AT.SET_USER_DATA_SUCCESS,
  payload: data
});
// ---------TOASTER---------

export const toasterSuccess = (data) => ({
  type: 'SUCCESS_MESSAGE', data
});
  
export const toasterFail = (e) => ({
  type: 'FAIL_MESSAGE', e
});
export const logout =  () => (dispatch) => {
  localStorage.removeItem('user');
  dispatch(logoutSuccess(true));
};
export const setToLocalStorage =  (user) => (dispatch) => {
  localStorage.setItem('user', JSON.stringify(user));
  dispatch(setToLocalStorgeSuccess(true));
};
export const verifyRememberMe =  () => (dispatch) => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user) {
    dispatch(setUserData(user));
  }
};
export const auth =  (user, link) => (dispatch) => {
  const body = {
    username: user.username,
    password: user.password
  };
  const myHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  };
 
  axios.post(`${URL}/${link}`,  body,  { headers: myHeaders })
    .then((response) => {
      if (link === 'signup') {
        dispatch(setSignUpSuccess(response));
      } else {
        dispatch(setSignInSuccess(response));
      }
      dispatch(toasterSuccess({ msg: 'signin success' }));
    })
    .catch((error) => {
      dispatch(toasterFail(error.message));
    });
};
