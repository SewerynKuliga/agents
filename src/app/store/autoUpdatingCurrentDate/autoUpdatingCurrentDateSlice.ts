import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AppDispatch, RootState } from "..";

export interface AutoUpdatingCurrentDateState {
  currentDate: string;
}

const initialState: AutoUpdatingCurrentDateState = {
  currentDate: new Date().toISOString(),
};

export const currentDateSlice = createSlice({
  name: "currentDate",
  initialState,
  reducers: {
    setCurrentDate: (
      state,
      action: PayloadAction<string>
    ): AutoUpdatingCurrentDateState => ({
      currentDate: action.payload,
    }),
  },
});

export const { setCurrentDate } = currentDateSlice.actions;

export const selectCurrentDate = (state: RootState) =>
  state.currentDate.currentDate;

export const selectCurrentTime = (state: RootState) =>
  new Date(state.currentDate.currentDate).getTime();

export const currentDateReducer = currentDateSlice.reducer;

export function initializeCurrentTimeClock(dispatch: AppDispatch) {
  setInterval(() => {
    dispatch(setCurrentDate(new Date().toISOString().split(".")[0]));
  }, 1000);
}
