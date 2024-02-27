import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "..";

export interface AuthState {
  agentName: string;
}

const initialState: AuthState = {
  agentName: "",
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: () => initialState,
    logIn: (state, action: PayloadAction<string>) => {
      return {
        agentName: action.payload,
      };
    },
  },
});

export const { logIn, logOut } = auth.actions;

export const selectAuthAgentName = (state: RootState) => state.auth.agentName;

export const authReducer = auth.reducer;
