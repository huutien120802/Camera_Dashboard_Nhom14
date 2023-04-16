import { put, takeLeading } from 'redux-saga/effects';

import warningAPI from 'apis/warning/warningAPI';

import {
  apiErrorHandler,
} from 'utils/index';

import {
  GET_ALL_WARNINGS,
} from './actionTypes';

import {
  actionGetAllWarningsSuccess,
  actionGetAllWarningsFailed,
} from './actions';

function* getAllWarnings() {
  try {
    const response = yield warningAPI.getAllWarnings();

    yield put(actionGetAllWarningsSuccess(response));
  } catch (error) {
    apiErrorHandler(error);

    yield put(actionGetAllWarningsFailed());
  }
}

export default function* WarningsSaga() {
  yield takeLeading(GET_ALL_WARNINGS, getAllWarnings);
}
