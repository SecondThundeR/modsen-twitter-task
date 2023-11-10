import type { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { appStore, persistedStore } from "../appStore";

export const StoreProvider = ({ children }: PropsWithChildren) => (
  <Provider store={appStore}>
    <PersistGate loading={null} persistor={persistedStore}>
      {children}
    </PersistGate>
  </Provider>
);

if (window.Cypress) {
  window.store = appStore;
}
