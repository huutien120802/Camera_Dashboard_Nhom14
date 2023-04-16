import {
  GET_ALL_WARNINGS,
  GET_ALL_WARNINGS_SUCCESS,
  GET_ALL_WARNINGS_FAILED,
} from './actionTypes';

const initialState = {
  loading: false,
  warnings: [],
};

const getAllWarnings = (state = initialState, action) => {
  switch (action.type) {
    // GET USER INFO
    case GET_ALL_WARNINGS:
      return {
        ...state,
        loading: true,
      };

    case GET_ALL_WARNINGS_SUCCESS:
      return {
        ...state,
        loading: false,
        warnings: action.payload,
      };

    case GET_ALL_WARNINGS_FAILED:
      return {
        ...state,
        loading: false,
        warnings: initialState.warnings,
      };

    default:
      return state;
  }
};

export default getAllWarnings;
