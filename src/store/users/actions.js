import {
  GET_ALL_USERS,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAILED,
} from './actionTypes';

// GET ALL USERS
export const actionGetAllUsers = (payload) => ({
  type: GET_ALL_USERS,
  payload,
});

export const actionGetAllUsersSuccess = (payload) => ({
  type: GET_ALL_USERS_SUCCESS,
  payload,
});

export const actionGetAllUsersFailed = () => ({
  type: GET_ALL_USERS_FAILED,
});
