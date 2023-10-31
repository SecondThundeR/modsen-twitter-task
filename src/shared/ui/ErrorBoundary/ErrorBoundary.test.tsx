import { ErrorBoundary } from "./ErrorBoundary";
import { render } from "~/testUtils";

describe("ErrorBoundary", () => {
  it("should render children when there is no error", () => {
    const { getByText } = render(
      <ErrorBoundary>
        <div>Test</div>
      </ErrorBoundary>,
    );

    expect(getByText("Test")).toBeInTheDocument();
  });

  it("should render an error message when there is an error", () => {
    const errorMessage = "Something went wrong";
    const ErrorComponent = () => {
      throw new Error(errorMessage);
    };

    const { getByText } = render(
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>,
    );

    expect(getByText(`Error details: ${errorMessage}`)).toBeInTheDocument();
  });
});
