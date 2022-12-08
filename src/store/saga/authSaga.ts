import { put, select, takeEvery } from '@redux-saga/core/effects';
import API from '../../api';
import { AuthStateType, Shop, SubmitAuthFormInput } from '../../types';
import {
  connectShop,
  connectShopSuccess,
  fetchGoogleToken,
  fetchGoogleTokenFailure,
  fetchGoogleTokenSuccess,
  registerUser,
  registerUserFailure,
  registerUserSuccess,
} from '../slice/authSlice';

export function* registerUserSaga() {
  const name: string = yield select((state) => state.auth.user.name);

  try {
    const data: Shop = yield API.fetchShopifyData(name);
    yield put(registerUserSuccess(data));

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    yield put(registerUserFailure(error.message));
  }
}

export function* fetchGoogleTokenSaga() {
  try {
    const data: string = yield API.fetchGoogleData();
    yield put(fetchGoogleTokenSuccess(data));

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    yield put(fetchGoogleTokenFailure(error.message));
  }
}

export function* connectShopSaga() {
  const data: AuthStateType = yield select((state) => state.auth);

  const payload: SubmitAuthFormInput = {
    name: data.user?.name || '',
    email: data.user?.email || '',
    password: data.user?.password || '',
    shop_token: data.shop?.token || '',
    google_token: data.google_token || '',
  };

  try {
    yield API.register(payload);
    yield put(connectShopSuccess());

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    yield put(connectShop(error.message));
  }
}

export function* rootAuthSaga() {
  yield takeEvery(registerUser.type, registerUserSaga);
  yield takeEvery(fetchGoogleToken.type, fetchGoogleTokenSaga);
  yield takeEvery(connectShop.type, connectShopSaga);
}
