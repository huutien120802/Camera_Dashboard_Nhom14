import {
  GET_ALL_USERS,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAILED,
} from './actionTypes';

const initialState = {
  loading: false,

  users: [],
};

const getAllUsers = (state = initialState, action) => {
  switch (action.type) {
    // GET ALL USERS
    case GET_ALL_USERS:
      return {
        ...state,
        loading: true,
      };

    case GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };

    case GET_ALL_USERS_FAILED:
      return {
        ...state,
        loading: false,
        users: initialState.user,
      };

    default:
      return state;
  }
};

export default getAllUsers;
