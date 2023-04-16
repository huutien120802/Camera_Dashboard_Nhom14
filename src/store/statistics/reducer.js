import {
  GET_ALL_STATISTICS,
  GET_ALL_STATISTICS_SUCCESS,
  GET_ALL_STATISTICS_FAILED,
} from './actionTypes';

const initialState = {
  loading: false,
  statistics: [],
};

const getAllStatistics = (state = initialState, action) => {
  switch (action.type) {
    // GET USER INFO
    case GET_ALL_STATISTICS:
      return {
        ...state,
        loading: true,
      };

    case GET_ALL_STATISTICS_SUCCESS:
      return {
        ...state,
        loading: false,
        statistics: action.payload,
      };

    case GET_ALL_STATISTICS_FAILED:
      return {
        ...state,
        loading: false,
        statistics: initialState.statistics,
      };

    default:
      return state;
  }
};

export default getAllStatistics;
