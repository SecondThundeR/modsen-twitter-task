import {
  NO_DECORATION,
  UNDERLINE_DECORATION,
} from "../../constants/generalStyles";
import { getFontSize, getTextColor } from "../../helpers/textLinkStyles";
import { lightTheme } from "../../lib/theme";

import { TextLink } from "./TextLink";
import { render } from "~/testUtils";

describe("TextLink", () => {
  const text = "Example Text";

  it("should render the text and href correctly", () => {
    const href = "https://example.com";
    const { getByText, rerender } = render(<TextLink text={text} />);
    const link = getByText(text);
    expect(link).toHaveAttribute("href", "#");

    rerender(<TextLink href={href} text={text} />);
    expect(link).toHaveAttribute("href", href);
    expect(link).toHaveStyleRule("text-decoration", NO_DECORATION);
    expect(link).toHaveStyleRule("text-decoration", UNDERLINE_DECORATION, {
      modifier: ":hover",
    });
  });

  it("should render type correctly", () => {
    const { getByText, rerender } = render(<TextLink text={text} />);
    const link = getByText(text);
    expect(link).toHaveStyleRule("color", getTextColor("regular", lightTheme));

    rerender(<TextLink text={text} type="primary" />);
    expect(link).toHaveStyleRule("color", getTextColor("primary", lightTheme));
  });

  it("should render size correctly", () => {
    const { getByText, rerender } = render(<TextLink text={text} />);
    const link = getByText(text);
    expect(link).toHaveStyleRule("font-size", getFontSize("regular"));

    rerender(<TextLink text={text} size="inherit" />);
    expect(link).toHaveStyleRule("font-size", getFontSize("inherit"));
  });

  it("should render no decoration when isDisabled is true", () => {
    const { getByText } = render(<TextLink text={text} isDisabled />);
    const link = getByText(text);

    expect(link).toHaveStyleRule("text-decoration", NO_DECORATION, {
      modifier: ":hover",
    });
  });
});
