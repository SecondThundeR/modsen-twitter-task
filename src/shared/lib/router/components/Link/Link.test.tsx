import { COLORS } from "@/shared/constants/colors";
import {
  NO_DECORATION,
  UNDERLINE_DECORATION,
} from "@/shared/constants/generalStyles";
import { Link } from "./Link";
import { render } from "~/testUtils";

describe("Link", () => {
  it("should render a NavLink with the correct props", () => {
    const { getByText } = render(<Link to="/test">Test Link</Link>);

    const linkElement = getByText("Test Link");

    expect(linkElement).toHaveAttribute("href", "/test");
    expect(linkElement).toHaveStyleRule("color", COLORS.accent);
    expect(linkElement).toHaveStyleRule("text-decoration", NO_DECORATION);
    expect(linkElement).toHaveStyleRule(
      "text-decoration",
      UNDERLINE_DECORATION,
      {
        modifier: ":hover",
      },
    );
  });

  it("should render with variant prop", () => {
    const { getByText } = render(
      <Link to="/test" variant="regular">
        Test Link
      </Link>,
    );

    const linkElement = getByText("Test Link");
    expect(linkElement).toHaveStyleRule("color", COLORS.black);
  });
});
