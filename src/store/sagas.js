import { all, fork } from 'redux-saga/effects';

import Profile from 'store/profile/saga';

import LoginSaga from 'store/auth/login/saga';

export default function* rootSaga() {
  yield all([
    fork(Profile),

    fork(LoginSaga),
  ]);
}
