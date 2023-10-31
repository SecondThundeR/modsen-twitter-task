import { Select } from "./Select";
import { render } from "~/testUtils";

describe("Select", () => {
  const options = [
    { value: "option1", name: "Option 1" },
    { value: "option2", name: "Option 2" },
    { value: "option3", name: "Option 3" },
  ];

  it("should render the label and options correctly", () => {
    const { getByText } = render(
      <Select label="Select an option" options={options} />,
    );

    expect(getByText("Select an option")).toBeInTheDocument();
    expect(getByText("Option 1")).toBeInTheDocument();
    expect(getByText("Option 2")).toBeInTheDocument();
    expect(getByText("Option 3")).toBeInTheDocument();
  });

  it("should render an error message when provided", () => {
    const { getByText, rerender } = render(
      <Select
        label="Select an option"
        options={options}
        errorMessage="This field is required"
      />,
    );

    expect(getByText("This field is required")).toBeInTheDocument();

    rerender(
      <Select
        label="Select an option"
        options={options}
        errorMessage={{ message: "This field is required" }}
      />,
    );

    expect(getByText("This field is required")).toBeInTheDocument();
  });
});
