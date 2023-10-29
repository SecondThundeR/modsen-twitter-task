import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { appStore, persistedStore } from "@/app/appStore";

export const withStore = (component: () => React.ReactNode) => () => (
  <Provider store={appStore}>
    <PersistGate loading={null} persistor={persistedStore}>
      {component()}
    </PersistGate>
  </Provider>
);
