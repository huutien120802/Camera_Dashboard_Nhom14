import {
  GET_ALL_WARNINGS,
  GET_ALL_WARNINGS_SUCCESS,
  GET_ALL_WARNINGS_FAILED,
} from './actionTypes';

export const actionGetAllWarnings = (payload) => ({
  type: GET_ALL_WARNINGS,
  payload,
});

export const actionGetAllWarningsSuccess = (payload) => ({
  type: GET_ALL_WARNINGS_SUCCESS,
  payload,
});

export const actionGetAllWarningsFailed = () => ({
  type: GET_ALL_WARNINGS_FAILED,
});
