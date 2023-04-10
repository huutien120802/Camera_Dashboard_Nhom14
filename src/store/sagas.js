import { all, fork } from 'redux-saga/effects';

import User from 'store/profile/saga';

import LoginSaga from 'store/auth/login/saga';

export default function* rootSaga() {
  yield all([
    fork(User),

    fork(LoginSaga),
  ]);
}
