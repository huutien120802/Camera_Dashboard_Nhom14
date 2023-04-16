import {
  GET_ALL_STATISTICS,
  GET_ALL_STATISTICS_SUCCESS,
  GET_ALL_STATISTICS_FAILED,
} from './actionTypes';

export const actionGetAllStatistics = (payload) => ({
  type: GET_ALL_STATISTICS,
  payload,
});

export const actionGetAllStatisticsSuccess = (payload) => ({
  type: GET_ALL_STATISTICS_SUCCESS,
  payload,
});

export const actionGetAllStatisticsFailed = () => ({
  type: GET_ALL_STATISTICS_FAILED,
});
