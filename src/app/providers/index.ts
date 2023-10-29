import compose from "compose-function";

import { withErrorBoundary } from "./with-error-boundary";
import { withGlobalStyle } from "./with-global-style";
import { withRouter } from "./with-router";
import { withStore } from "./with-store";

export const withProviders = compose(
  withStore,
  withErrorBoundary,
  withRouter,
  withGlobalStyle,
);
