import axios from 'axios';
import { attachTokenAxios } from '../../../util/setAuthorizationToken';

export const FETCH_ELEMENT_DATA_SUCCESS = 'FETCH_ELEMENT_DATA_SUCCESS';
export const CREATE_ELEMENT_SUCCESS = 'CREATE_ELEMENT_SUCCESS';
export const CREATE_ELEMENT_FAILURE = 'CREATE_ELEMENT_FAILURE';
export const UPDATE_ELEMENT_SUCCESS = 'UPDATE_ELEMENT_SUCCESS';
export const UPDATE_ELEMENT_FAILURE = 'UPDATE_ELEMENT_FAILURE';
export const DELETE_ELEMENT_SUCCESS = 'DELETE_ELEMENT_SUCCESS';
export const DELETE_ELEMENT_FAILURE = 'DELETE_ELEMENT_FAILURE';
export const INIT_DATA_FOR_UPDATE_ELEMENT_FORM = 'INIT_DATA_FOR_UPDATE_ELEMENT_FORM';

export function fetchElementData() {
  return (dispatch, getState) => {
    const url = `http://devapimdiary.mimosatek.com/api/elements/getAll`;
    const configs = {
      headers: attachTokenAxios(getState),
    };
    axios.get(url, configs)
      .then(response => {
        if (response.data.success) {
          dispatch({
            type: FETCH_ELEMENT_DATA_SUCCESS,
            payload: response.data.payload
          })
        }
      })
  }
}

export function createElement(data) {
  return (dispatch, getState) => {
    const url = `http://devapimdiary.mimosatek.com/api/elements/create`;
    const params = data;
    const configs = {
      headers: attachTokenAxios(getState),
    };
    axios.post(url, params, configs)
      .then(response => {
        console.log('response: ', response);
        if (response.data.success) {
          dispatch({
            type: CREATE_ELEMENT_SUCCESS,
            payload: response.data.payload
          })
        } else dispatch({
          type: CREATE_ELEMENT_FAILURE,
          payload: {}
        })
      })
  }
}

export function updateElement(id, data) {
  return (dispatch, getState) => {
    const url = `http://devapimdiary.mimosatek.com/api/elements/update/${id}`;
    const params = data;
    const configs = {
      headers: attachTokenAxios(getState),
    };
    axios.put(url, params, configs)
      .then(response => {
        if (response.data.success) {
          dispatch({
            type: UPDATE_ELEMENT_SUCCESS,
            payload: response.data.payload
          })
        } else dispatch({
          type: UPDATE_ELEMENT_FAILURE,
          payload: {}
        })
      })
  }
}

export function deleteElement(id) {
  return (dispatch, getState) => {
    const url = `http://devapimdiary.mimosatek.com/api/elements/delete/${id}`;
    const configs = {
      headers: attachTokenAxios(getState),
    };
    axios.delete(url, configs)
      .then(response => {
        if (response.data.success) {
          dispatch({
            type: DELETE_ELEMENT_SUCCESS,
            payload: id
          })
        } else dispatch({
          type: DELETE_ELEMENT_FAILURE,
          payload: {}
        })
      })
  }
}

export function initDataForUpdateElementForm(data) {
  return {
    type: INIT_DATA_FOR_UPDATE_ELEMENT_FORM,
    payload: data,
  };
}



