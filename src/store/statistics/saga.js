import { put, takeLeading } from 'redux-saga/effects';

import statisticAPI from 'apis/statistic/statisticAPI';

import {
  apiErrorHandler,
} from 'utils/index';

import {
  GET_ALL_STATISTICS,
} from './actionTypes';

import {
  actionGetAllStatisticsSuccess,
  actionGetAllStatisticsFailed,
} from './actions';

function* getAllStatistics() {
  try {
    const response = yield statisticAPI.getAllStatistics();

    yield put(actionGetAllStatisticsSuccess(response));
  } catch (error) {
    apiErrorHandler(error);

    yield put(actionGetAllStatisticsFailed());
  }
}

export default function* StatisticsSaga() {
  yield takeLeading(GET_ALL_STATISTICS, getAllStatistics);
}
