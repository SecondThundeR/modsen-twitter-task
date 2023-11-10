import type { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";

import { ScrollToTop } from "@/features/navigation";

export const RouterProvider = ({ children }: PropsWithChildren) => (
  <BrowserRouter>
    <ScrollToTop />
    {children}
  </BrowserRouter>
);
