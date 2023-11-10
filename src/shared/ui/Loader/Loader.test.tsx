import { COLORS } from "../../constants/colors";
import { SPINNER_SIZING } from "../../constants/spinnerStyles";

import { Loader } from "./Loader";
import { render } from "~/testUtils";

describe("Loader", () => {
  it("should render the loader with text", () => {
    const { getByText, getByTestId } = render(<Loader text="Loading..." />);
    const spinner = getByTestId("spinner");

    expect(getByText("Loading...")).toBeInTheDocument();
    expect(spinner).toHaveStyleRule("width", SPINNER_SIZING.width);
    expect(spinner).toHaveStyleRule("height", SPINNER_SIZING.height);
    expect(spinner).toHaveStyleRule(
      "border",
      `${SPINNER_SIZING.border} solid ${COLORS.black}`,
    );
  });

  it("should render the loader without text", () => {
    const { queryByText } = render(<Loader />);
    expect(queryByText("Loading...")).not.toBeInTheDocument();
  });

  it("should render the inline loader", () => {
    const { getByTestId } = render(<Loader inline />);
    const spinner = getByTestId("spinner");

    expect(spinner).toHaveStyleRule("width", SPINNER_SIZING.widthInline);
    expect(spinner).toHaveStyleRule("height", SPINNER_SIZING.heightInline);
    expect(spinner).toHaveStyleRule(
      "border",
      `${SPINNER_SIZING.borderInline} solid ${COLORS.black}`,
    );
  });
});
