import { combineReducers } from 'redux';

import User from 'store/profile/reducer';

import Login from 'store/auth/login/reducer';

const rootReducer = combineReducers({
  User,

  Login,
});

export default rootReducer;
