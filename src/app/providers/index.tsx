import { PropsWithChildren } from "react";
import { ErrorBoundaryProvider } from "./error-boundary";
import { RouterProvider } from "./router";
import { StoreProvider } from "./store";
import { ThemeProvider } from "./theme";

export const WithProviders = ({ children }: PropsWithChildren) => (
  <ErrorBoundaryProvider>
    <StoreProvider>
      <RouterProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </RouterProvider>
    </StoreProvider>
  </ErrorBoundaryProvider>
);
