import { PayloadAction, SerializedError } from "@reduxjs/toolkit";
import { AppError } from "../../common";

export function defaultFailedApiThunkHandler<T>(
  state: T,
  action: PayloadAction<
    AppError | undefined,
    string,
    {
      rejectedWithValue: boolean;
    },
    SerializedError
  >
): T {
  if (action.payload) {
    return {
      ...state,
      status: "failed",
      apiError: action.payload,
    };
  }
  return {
    ...state,
    status: "failed",
    apiError: action.error,
  };
}
