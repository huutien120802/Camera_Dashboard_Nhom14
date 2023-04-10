import {
  GET_MY_PROFILE,
  GET_MY_PROFILE_SUCCESS,
  GET_MY_PROFILE_FAILED,

  LOGOUT,
} from './actionTypes';

const initialState = {
  loading: false,
  loadingAvatar: false,

  me: {
    _id: '',
    avatar: '',
    createdAt: '',
    email: '',
    username: '',
  },
};

const userProfile = (state = initialState, action) => {
  switch (action.type) {
    // GET MY PROFILE
    case GET_MY_PROFILE:
      return {
        ...state,
        loading: true,
      };

    case GET_MY_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        me: action.payload,
      };

    case GET_MY_PROFILE_FAILED:
      return {
        ...state,
        loading: false,
        me: initialState.me,
      };

    // LOGOUT
    case LOGOUT:
      return {
        ...state,
        me: initialState.me,
      };

    default:
      return state;
  }
};

export default userProfile;
