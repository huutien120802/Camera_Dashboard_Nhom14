import { put, takeLeading } from 'redux-saga/effects';
import jwtDecode from 'jwt-decode';

import userAPI from 'apis/user/userAPI';

import LOCATIONS from 'constants/index';

import {
  apiErrorHandler,
} from 'utils/index';

// Login Redux States
import {
  GET_USER_INFO,
  LOGOUT,
} from './actionTypes';

import {
  actionGetUserInfoSuccess,
  actionGetUserInfoFailed,
} from './actions';

function* getUserInfo({ payload }) {
  try {
    const token = localStorage.getItem('token');
    const decoded = jwtDecode(token);
    const { userId } = decoded;
    const response = yield userAPI.getUserInfo(userId);

    yield put(actionGetUserInfoSuccess(response));
  } catch (error) {
    apiErrorHandler(error);

    localStorage.removeItem('token');
    payload?.navigate(LOCATIONS.LOGIN);

    yield put(actionGetUserInfoFailed());
  }
}

function logout({ payload }) {
  try {
    const { history } = payload;

    localStorage.removeItem('token');

    history.push(LOCATIONS.LOGIN);
  } catch (error) {
    apiErrorHandler(error);
  }
}

export default function* UserProfileSaga() {
  yield takeLeading(GET_USER_INFO, getUserInfo);
  yield takeLeading(LOGOUT, logout);
}
