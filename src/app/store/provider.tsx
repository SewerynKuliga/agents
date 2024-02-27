"use client";

import { store } from ".";
import { Provider } from "react-redux";

type ReduxProviderType = {
  children: React.ReactNode;
};

export function ReduxProvider({ children }: ReduxProviderType) {
  return <Provider store={store}>{children}</Provider>;
}
