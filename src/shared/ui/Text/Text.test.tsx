import { FONT_FAMILY_MAP } from "@/shared/constants/fontFamily";
import {
  INACTIVE_OPACITY,
  REGULAR_OPACITY,
} from "@/shared/constants/generalStyles";
import { WEIGHTS_MAP } from "@/shared/constants/weights";
import { getFontSize } from "@/shared/helpers/textStyles";

import { Text } from "./Text";
import { render } from "~/testUtils";

describe("Text", () => {
  it("should render the text prop", () => {
    const text = "Hello, world!";
    const { getByText } = render(<Text text={text} />);
    expect(getByText(text)).toBeInTheDocument();
  });

  it("should render the children prop", () => {
    const { getByText } = render(<Text>Hello, world!</Text>);
    expect(getByText("Hello, world!")).toBeInTheDocument();
  });

  it("should render isSubtext prop correctly", () => {
    const { getByText, rerender } = render(<Text text="title" />);
    expect(getByText("title")).toHaveStyleRule(
      "opacity",
      String(REGULAR_OPACITY),
    );

    rerender(<Text text="title" isSubtext />);
    expect(getByText("title")).toHaveStyleRule(
      "opacity",
      String(INACTIVE_OPACITY),
    );
  });

  it("should render with the correct size prop", () => {
    const { getByText, rerender } = render(<Text text="title" />);
    expect(getByText("title")).toHaveStyleRule(
      "font-size",
      getFontSize("regular"),
    );

    rerender(<Text text="title" size="large" />);
    expect(getByText("title")).toHaveStyleRule(
      "font-size",
      getFontSize("large"),
    );

    rerender(<Text text="title" size="small" />);
    expect(getByText("title")).toHaveStyleRule(
      "font-size",
      getFontSize("small"),
    );
  });

  /**
   * Idk, but toHaveStyleRule won't compare number from the constant, so I have to convert it to string
   */
  it("should render with the correct weight prop", () => {
    const { getByText, rerender } = render(<Text text="title" />);
    expect(getByText("title")).toHaveStyleRule(
      "font-weight",
      String(WEIGHTS_MAP.regular),
    );

    rerender(<Text text="title" weight="bold" />);
    expect(getByText("title")).toHaveStyleRule(
      "font-weight",
      String(WEIGHTS_MAP.bold),
    );

    rerender(<Text text="title" weight="medium" />);
    expect(getByText("title")).toHaveStyleRule(
      "font-weight",
      String(WEIGHTS_MAP.medium),
    );
  });

  it("should render with the correct font prop", () => {
    const { getByText, rerender } = render(<Text text="title" />);
    expect(getByText("title")).toHaveStyleRule(
      "font-family",
      FONT_FAMILY_MAP.roboto,
    );

    rerender(<Text text="title" font="serif" />);
    expect(getByText("title")).toHaveStyleRule(
      "font-family",
      FONT_FAMILY_MAP.robotoSerif,
    );
  });
});
