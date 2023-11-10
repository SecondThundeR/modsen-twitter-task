import type { PropsWithChildren } from "react";
import { ErrorBoundary } from "@/shared/ui";

export const ErrorBoundaryProvider = ({ children }: PropsWithChildren) => (
  <ErrorBoundary>{children}</ErrorBoundary>
);
