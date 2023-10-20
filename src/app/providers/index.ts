import compose from "compose-function";

import { withGlobalStyle } from "./with-global-style";
import { withRouter } from "./with-router";
import { withStore } from "./with-store";

export const withProviders = compose(withStore, withRouter, withGlobalStyle);
