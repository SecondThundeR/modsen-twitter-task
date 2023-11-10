import compose from "compose-function";

import { withErrorBoundary } from "./with-error-boundary";
import { withRouter } from "./with-router";
import { withStore } from "./with-store";
import { withTheme } from "./with-theme";

export const withProviders = compose(
  withStore,
  withErrorBoundary,
  withRouter,
  withTheme,
);
