/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StepperStateType } from '../../types';

const initialState: StepperStateType = {
  step: 0,
  disabledNext: true,
};

const stepperSlice = createSlice({
  name: 'stepper',
  initialState,
  reducers: {
    goBack(state) {
      state.step -= 1;
    },
    goNext(state) {
      state.step += 1;
    },
    setDisabledNext(state, action: PayloadAction<boolean>) {
      state.disabledNext = action.payload;
    },
  },
});

export const { goBack, goNext, setDisabledNext } = stepperSlice.actions;

export default stepperSlice.reducer;
