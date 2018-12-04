import axios from 'axios';
import AT from 'constants/actionTypes';

const URL = 'http://localhost:3000/api/tennant';

const getAllTennantsSuccess = (data) => ({
  type: AT.GET_ALL_TENNANTS_SUCCESS,
  payload: data
});
const addNewTennantSuccess = (data) => ({
  type: AT.ADD_NEW_TENNANT_SUCCESS,
  payload: data
});
const updateTennantSuccess = (tennant, id) => ({
  type: AT.UPDATE_TENNANT_SUCCESS,
  payload: { tennant, id }
});
const deleteTennantsSuccess = (data) => ({
  type: AT.DELETE_TENNANT_SUCCESS,
  payload: data
});
// ---------TOASTER---------

export const toasterSuccess = (data) => ({
  type: 'SUCCESS_MESSAGE', data
});
  
export const toasterFail = (e) => ({
  type: 'FAIL_MESSAGE', e
});

export const getAllTennants =  (userId) => (dispatch) => {
  const myHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  };
 
  axios.get(`${URL}/${userId}/all`,  { headers: myHeaders })
    .then((response) => {
      dispatch(getAllTennantsSuccess(response.data));
      dispatch(toasterSuccess({ msg: 'get tennant successful' }));
    })
    .catch((error) => {
      dispatch(toasterFail(error.message));
    });
};

export const addNewTennant =  (tennant, userId) => (dispatch) => {
  const body = {
    name: tennant.name,
    phoneNumber: tennant.phoneNumber,
    adress: tennant.adress,
    financialDebt: tennant.financialDebt
  };
  const myHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  };
 
  axios.post(`${URL}/${userId}/newTennant`, body,  { headers: myHeaders })
    .then((response) => {
      dispatch(addNewTennantSuccess(response.data));
      dispatch(toasterSuccess({ msg: 'add new tennant success' }));
    })
    .catch((error) => {
      dispatch(toasterFail(error.message));
    });
};
export const deleteTennants = (tennant, userId) => (dispatch) => {
  axios.delete(`${URL}/${userId}/deleteTennant/${tennant._id}`)
    .then((response) => {
      dispatch(deleteTennantsSuccess(tennant._id));
      dispatch(toasterSuccess(response));
    })
    .catch((error) => {
      dispatch(toasterFail(error.message));
    });
};
export const updateTennant =  (tennant, id, userId) => (dispatch) => {
  console.log(`${'ddfdf'}${tennant.financialDebt}`);

  const body = JSON.stringify({
    _id: id,
    phoneNumber: tennant.phone,
    name: tennant.name,
    adress: tennant.adress,
    financialDebt: tennant.financialDebt,
    _v: 0
  });
  const myHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  };
 
  axios.post(`${URL}/${userId}/updateTennant/${id}`, body, { headers: myHeaders })
    .then((response) => {
      dispatch(updateTennantSuccess(tennant, id));
      dispatch(toasterSuccess(response.data));
    })
    .catch((error) => {
      dispatch(toasterFail(error.message));
    });
};
