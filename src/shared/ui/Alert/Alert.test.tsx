import { COLORS } from "@/shared/constants/colors";

import { Alert } from "./Alert";
import { render } from "~/testUtils";

describe("Alert", () => {
  it("should render title and text correctly", () => {
    const { getByText, container } = render(
      <Alert title="Test Title" text="Test Text" />,
    );
    expect(getByText("Test Title")).toBeInTheDocument();
    expect(getByText("Test Text")).toBeInTheDocument();
    expect(container.firstChild).toHaveStyleRule(
      "background-color",
      COLORS.success,
    );
  });

  it("should render correctly with title only", () => {
    const { getByText } = render(<Alert title="Test Title" />);
    expect(getByText("Test Title")).toBeInTheDocument();
  });

  it("should render the success variant", () => {
    const { container } = render(
      <Alert title="Test Title" text="Test Text" variant="success" />,
    );
    expect(container.firstChild).toHaveStyleRule(
      "background-color",
      COLORS.success,
    );
  });

  it("should render the error variant", () => {
    const { container } = render(
      <Alert title="Test Title" text="Test Text" variant="error" />,
    );
    expect(container.firstChild).toHaveStyleRule(
      "background-color",
      COLORS.error,
    );
  });
});
