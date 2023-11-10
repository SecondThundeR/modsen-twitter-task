import { FONT_FAMILY_MAP } from "../../constants/fontFamily";
import { DIMENSIONS_MAP } from "../../constants/sizing";
import { WEIGHTS_MAP } from "../../constants/weights";
import { getFontSize } from "../../helpers/titleStyles";

import { Title } from "./Title";
import { render } from "~/testUtils";

describe("Title", () => {
  it("should render the text prop", () => {
    const text = "Hello, world!";
    const { getByText } = render(<Title text={text} />);
    expect(getByText(text)).toBeInTheDocument();
  });

  it("should render the children prop", () => {
    const { getByText } = render(<Title>Hello, world!</Title>);
    expect(getByText("Hello, world!")).toBeInTheDocument();
  });

  it("should render with the correct width prop", () => {
    const { getByText, rerender } = render(<Title text="title" />);
    expect(getByText("title")).toHaveStyleRule("width", DIMENSIONS_MAP.full);

    rerender(<Title text="title" width="fit" />);
    expect(getByText("title")).toHaveStyleRule("width", DIMENSIONS_MAP.fit);
  });

  it("should render with the correct size prop", () => {
    const { getByText, rerender } = render(<Title text="title" />);
    expect(getByText("title")).toHaveStyleRule(
      "font-size",
      getFontSize("regular"),
    );

    rerender(<Title text="title" size="compact" />);
    expect(getByText("title")).toHaveStyleRule(
      "font-size",
      getFontSize("compact"),
    );

    rerender(<Title text="title" size="extrasmall" />);
    expect(getByText("title")).toHaveStyleRule(
      "font-size",
      getFontSize("extrasmall"),
    );

    rerender(<Title text="title" size="small" />);
    expect(getByText("title")).toHaveStyleRule(
      "font-size",
      getFontSize("small"),
    );

    rerender(<Title text="title" size="large" />);
    expect(getByText("title")).toHaveStyleRule(
      "font-size",
      getFontSize("large"),
    );
  });

  /**
   * Idk, but toHaveStyleRule won't compare number from the constant, so I have to convert it to string
   */
  it("should render with the correct weight prop", () => {
    const { getByText, rerender } = render(<Title text="title" />);
    expect(getByText("title")).toHaveStyleRule(
      "font-weight",
      String(WEIGHTS_MAP.black),
    );

    rerender(<Title text="title" weight="bold" />);
    expect(getByText("title")).toHaveStyleRule(
      "font-weight",
      String(WEIGHTS_MAP.bold),
    );

    rerender(<Title text="title" weight="extrabold" />);
    expect(getByText("title")).toHaveStyleRule(
      "font-weight",
      String(WEIGHTS_MAP.extrabold),
    );

    rerender(<Title text="title" weight="medium" />);
    expect(getByText("title")).toHaveStyleRule(
      "font-weight",
      String(WEIGHTS_MAP.medium),
    );

    rerender(<Title text="title" weight="regular" />);
    expect(getByText("title")).toHaveStyleRule(
      "font-weight",
      String(WEIGHTS_MAP.regular),
    );
  });

  it("should render with the correct font prop", () => {
    const { getByText, rerender } = render(<Title text="title" />);
    expect(getByText("title")).toHaveStyleRule(
      "font-family",
      FONT_FAMILY_MAP.roboto,
    );

    rerender(<Title text="title" font="serif" />);
    expect(getByText("title")).toHaveStyleRule(
      "font-family",
      FONT_FAMILY_MAP.robotoSerif,
    );
  });
});
