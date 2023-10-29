import { ErrorBoundary } from "@/shared/ui";

export const withErrorBoundary = (component: () => React.ReactNode) => () => (
  <ErrorBoundary>{component()}</ErrorBoundary>
);
