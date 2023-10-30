import type { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

import { ScrollToTop } from "@/features/navigation";

export const withRouter = (component: () => ReactNode) => () => (
  <BrowserRouter>
    <>
      <ScrollToTop />
      {component()}
    </>
  </BrowserRouter>
);
