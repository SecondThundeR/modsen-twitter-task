import type { ReactNode } from "react";
import { ErrorBoundary } from "@/shared/ui";

export const withErrorBoundary = (component: () => ReactNode) => () => (
  <ErrorBoundary>{component()}</ErrorBoundary>
);
