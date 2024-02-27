import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import {
  currentDateReducer,
  initializeCurrentTimeClock,
} from "./autoUpdatingCurrentDate/autoUpdatingCurrentDateSlice";
import { authReducer } from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    currentDate: currentDateReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

initializeCurrentTimeClock(store.dispatch);
