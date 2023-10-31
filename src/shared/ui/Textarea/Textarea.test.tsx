import userEvent from "@testing-library/user-event";

import { Textarea } from "./Textarea";
import { render } from "~/testUtils";

describe("Textarea", () => {
  it("should render textarea element", () => {
    const { getByTestId } = render(<Textarea />);
    expect(getByTestId("textarea")).toBeInTheDocument();
  });

  it("should call onChange callback when input value changes", async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();

    const { getByTestId } = render(<Textarea onChange={handleChange} />);

    const input = getByTestId("textarea");
    await user.type(input, "test");

    expect(handleChange).toHaveBeenCalledTimes(4);
  });

  it("should display error message correctly", () => {
    const { getByText, rerender } = render(
      <Textarea errorMessage="error string" />,
    );
    expect(getByText("error string")).toBeInTheDocument();

    rerender(<Textarea errorMessage={{ message: "error message" }} />);
    expect(getByText("error message")).toBeInTheDocument();
  });
});
