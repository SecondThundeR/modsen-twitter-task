import type { ReactNode } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { appStore, persistedStore } from "@/app/appStore";

export const withStore = (component: () => ReactNode) => () => (
  <Provider store={appStore}>
    <PersistGate loading={null} persistor={persistedStore}>
      {component()}
    </PersistGate>
  </Provider>
);
