import { takeEvery } from '@redux-saga/core/effects';
import { registerUser } from '../slice/authSlice';

export function* registerUserSaga() {
  yield console.log('first');
}

export function* rootAuthSaga() {
  yield takeEvery(registerUser.type, registerUserSaga);
}
