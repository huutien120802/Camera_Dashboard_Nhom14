import { put, takeLeading } from 'redux-saga/effects';

import cameraAPI from 'apis/camera/cameraAPI';

import {
  apiErrorHandler,
} from 'utils/index';

import {
  GET_ALL_CAMERAS,
} from './actionTypes';

import {
  actionGetAllCamerasSuccess,
  actionGetAllCamerasFailed,
} from './actions';

function* getAllCameras() {
  try {
    const response = yield cameraAPI.getAllCameras();

    yield put(actionGetAllCamerasSuccess(response));
  } catch (error) {
    apiErrorHandler(error);

    yield put(actionGetAllCamerasFailed());
  }
}

export default function* CamerasSaga() {
  yield takeLeading(GET_ALL_CAMERAS, getAllCameras);
}
