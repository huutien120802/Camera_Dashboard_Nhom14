import { put, takeLeading } from 'redux-saga/effects';

import LOCATIONS from 'constants/index';

import userAPI from 'apis/user/userAPI';

import {
  apiErrorHandler,
} from 'utils/index';

// Login Redux States
import {
  GET_MY_PROFILE,
  LOGOUT,
} from './actionTypes';

import {
  actionGetMyProfileSuccess,
  actionGetMyProfileFailed,
} from './actions';

function* getMyProfile({ payload }) {
  try {
    const response = yield userAPI.getMyProfile();

    yield put(actionGetMyProfileSuccess(response.data));
  } catch (error) {
    apiErrorHandler(error);

    localStorage.removeItem('token');
    payload?.navigate?.push(LOCATIONS.LOGIN);

    yield put(actionGetMyProfileFailed());
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
  yield takeLeading(GET_MY_PROFILE, getMyProfile);
  yield takeLeading(LOGOUT, logout);
}
