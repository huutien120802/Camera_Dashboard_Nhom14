import { combineReducers } from 'redux';

import Profile from 'store/profile/reducer';

import Login from 'store/auth/login/reducer';

const rootReducer = combineReducers({
  Profile,

  Login,
});

export default rootReducer;
