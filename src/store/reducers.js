import { combineReducers } from 'redux';

import User from 'store/user/reducer';
import Camera from 'store/cameras/reducer';
import Location from 'store/locations/reducer';
import Statistic from 'store/statistics/reducer';
import Warning from 'store/warnings/reducer';

import Login from 'store/auth/login/reducer';

const rootReducer = combineReducers({
  User,
  Camera,
  Location,
  Statistic,
  Warning,

  Login,
});

export default rootReducer;
