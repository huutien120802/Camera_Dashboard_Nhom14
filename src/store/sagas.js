import { all, fork } from 'redux-saga/effects';

import User from 'store/user/saga';
import Camera from 'store/cameras/saga';
import Location from 'store/locations/saga';
import Statistic from 'store/statistics/saga';
import Warning from 'store/warnings/saga';

import LoginSaga from 'store/auth/login/saga';

export default function* rootSaga() {
  yield all([
    fork(User),
    fork(Camera),
    fork(Location),
    fork(Statistic),
    fork(Warning),

    fork(LoginSaga),
  ]);
}
