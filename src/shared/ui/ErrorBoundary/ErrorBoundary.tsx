import { Component } from "react";
import type { ErrorInfo } from "react";

import { Title, Text } from "../";

import { Wrapper } from "./ErrorBoundary.styled";
import type { ErrorBoundaryProps, ErrorBoundaryState } from "./interfaces";

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  public state: ErrorBoundaryState = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Wrapper>
          <Title text="Error has been encountered!" />
          <Text
            text={`Error details: ${this.state.error!.message}`}
            size="large"
            isSubtext
          />
        </Wrapper>
      );
    }

    return this.props.children;
  }
}
