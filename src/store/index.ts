import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import logger from 'redux-logger';
import { all, fork } from '@redux-saga/core/effects';

import authReducer from './slice/authSlice';
import stepperReducer from './slice/stepperSlice';
import { rootAuthSaga } from './saga/authSaga';

const combinedReducer = combineReducers({
  auth: authReducer,
  stepper: stepperReducer,
});

const rootSaga = function* rootGenerator() {
  yield all([fork(rootAuthSaga)]);
};

const sagaMMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: combinedReducer,
  middleware: (getDefaultMiddleware) => {
    const defaultMiddleware = getDefaultMiddleware();
    return [...defaultMiddleware, sagaMMiddleware, logger];
  },
});

sagaMMiddleware.run(rootSaga);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
