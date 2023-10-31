import { DISPLAY_MAP, FLEX_PROPERTIES } from "@/shared/constants/generalStyles";
import { DIMENSIONS_MAP, GAP_MAP, MARGIN_MAP } from "@/shared/constants/sizing";

import { Layout } from "./Layout";
import { render } from "~/testUtils";

describe("Register Layout", () => {
  it("should render children", () => {
    const { getByText, getByTestId } = render(<Layout>Test child</Layout>);
    const layout = getByTestId("layout");

    expect(getByText("Test child")).toBeInTheDocument();

    expect(layout).toHaveStyleRule(
      "max-width",
      DIMENSIONS_MAP.narrowSignupBlock,
    );
    expect(layout).toHaveStyleRule("display", DISPLAY_MAP.flex);

    expect(layout).toHaveStyleRule("gap", GAP_MAP.extraLarge);
    expect(layout).toHaveStyleRule("flex-direction", FLEX_PROPERTIES.column);
    expect(layout).toHaveStyleRule(
      "justify-content",
      FLEX_PROPERTIES.justifyCenter,
    );
    expect(layout).toHaveStyleRule("align-items", FLEX_PROPERTIES.alignCenter);
    expect(layout).toHaveStyleRule(
      "margin",
      MARGIN_MAP.registerWrapper.regular,
    );
  });
});
