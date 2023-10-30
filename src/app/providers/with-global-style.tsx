import type { ReactNode } from "react";

import { ThemeProvider } from "@/entities/theme";

export const withGlobalStyle = (component: () => ReactNode) => () => (
  <ThemeProvider>{component()}</ThemeProvider>
);
