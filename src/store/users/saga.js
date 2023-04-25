import { put, takeLeading } from 'redux-saga/effects';

import userAPI from 'apis/user/userAPI';

import axiosClient from 'utils/axios';

import {
  apiErrorHandler,
} from 'utils/index';

import {
  GET_ALL_USERS,
} from './actionTypes';

import {
  actionGetAllUsersSuccess,
  actionGetAllUsersFailed,
} from './actions';

function* getAllUsers() {
  try {
    const token = localStorage.getItem('token');

    axiosClient.defaults.headers.Authorization = `Bearer ${token}`;

    const response = yield userAPI.getAllUsers();

    yield put(actionGetAllUsersSuccess(response));
  } catch (error) {
    apiErrorHandler(error);

    yield put(actionGetAllUsersFailed());
  }
}

export default function* UserProfileSaga() {
  yield takeLeading(GET_ALL_USERS, getAllUsers);
}
