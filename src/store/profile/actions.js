import {
  GET_MY_PROFILE,
  GET_MY_PROFILE_SUCCESS,
  GET_MY_PROFILE_FAILED,

  LOGOUT,
} from './actionTypes';

// GET MY PROFILE
export const actionGetMyProfile = (payload) => ({
  type: GET_MY_PROFILE,
  payload,
});

export const actionGetMyProfileSuccess = (payload) => ({
  type: GET_MY_PROFILE_SUCCESS,
  payload,
});

export const actionGetMyProfileFailed = () => ({
  type: GET_MY_PROFILE_FAILED,
});

// LOGOUT
export const actionLogout = (payload) => ({
  type: LOGOUT,
  payload,
});
