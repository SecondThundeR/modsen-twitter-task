import userEvent from "@testing-library/user-event";

import { Input } from "./Input";
import { render } from "~/testUtils";

describe("Input", () => {
  it("should render label and input element", () => {
    const { getByText, getByTestId } = render(<Input label="Username" />);
    expect(getByText("Username")).toBeInTheDocument();
    expect(getByTestId("input-wrapper")).toHaveStyleRule("display", "flex");
  });

  it("should call onChange callback when input value changes", async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();

    const { getByTestId } = render(
      <Input label="Username" onChange={handleChange} />,
    );

    const input = getByTestId("input");
    await user.type(input, "test");

    expect(handleChange).toHaveBeenCalledTimes(4);
  });

  it("should display error message correctly", () => {
    const { getByText, rerender } = render(
      <Input errorMessage="error string" />,
    );
    expect(getByText("error string")).toBeInTheDocument();

    rerender(<Input errorMessage={{ message: "error message" }} />);
    expect(getByText("error message")).toBeInTheDocument();
  });

  it("should hide input correctly with property", () => {
    const { getByTestId } = render(<Input isHidden />);
    const wrapper = getByTestId("input-wrapper");
    expect(wrapper).toBeInTheDocument();
    expect(wrapper).toHaveStyleRule("display", "none");
  });
});
