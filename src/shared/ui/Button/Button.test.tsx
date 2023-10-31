import "jest-styled-components";

import { FONT_FAMILY_MAP } from "@/shared/constants/fontFamily";
import {
  DIMENSIONS_MAP,
  FONT_SIZE_MAP,
  PADDING_MAP,
} from "@/shared/constants/sizing";
import {
  getBackgroundColor,
  getBorder,
  getHoverBackgroundColor,
  getTextColor,
} from "@/shared/helpers/buttonStyles";
import { lightTheme } from "@/shared/lib/theme";
import { FontsVariants } from "@/shared/types/fontsVariants";

import { Button } from "./Button";
import type { ButtonSizes, ButtonVariant, ButtonWidths } from "./interfaces";
import { render, fireEvent } from "~/testUtils";

describe("Button", () => {
  it("should render correctly", () => {
    const { getByText } = render(<Button text="Button text" />);
    expect(getByText("Button text")).toBeInTheDocument();
  });

  it("should handle button props correctly", () => {
    const onClickMock = jest.fn();
    const { getByRole, rerender } = render(
      <Button text="Button text" onClick={onClickMock} />,
    );

    const button = getByRole("button");

    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);

    rerender(<Button text="Button text" type="submit" disabled />);
    expect(button).toHaveAttribute("type", "submit");
    expect(button).toBeDisabled();
  });

  it("should render correct width", () => {
    let width: ButtonWidths = "fit";
    const { getByRole, rerender } = render(
      <Button text="Button text" width={width} />,
    );
    const button = getByRole("button");

    expect(button).toHaveStyleRule("width", DIMENSIONS_MAP[width]);

    width = "full";

    rerender(<Button text="Button text" width={width} />);
    expect(button).toHaveStyleRule("width", DIMENSIONS_MAP[width]);
  });

  it("should render correct width", () => {
    let size: ButtonSizes = "small";
    const { getByRole, rerender } = render(
      <Button text="Button text" size={size} />,
    );
    const button = getByRole("button");

    expect(button).toHaveStyleRule("font-size", FONT_SIZE_MAP.button[size]);
    expect(button).toHaveStyleRule("padding", PADDING_MAP.button[size]);

    size = "compact";

    rerender(<Button text="Button text" size="compact" />);
    expect(button).toHaveStyleRule("font-size", FONT_SIZE_MAP.button[size]);
    expect(button).toHaveStyleRule("padding", PADDING_MAP.button[size]);

    size = "regular";

    rerender(<Button text="Button text" size={size} />);
    expect(button).toHaveStyleRule("font-size", FONT_SIZE_MAP.button[size]);
    expect(button).toHaveStyleRule("padding", PADDING_MAP.button[size]);
  });

  it("should render correct font", () => {
    let font: FontsVariants = "regular";
    const { getByRole, rerender } = render(
      <Button text="Button text" font={font} />,
    );
    const button = getByRole("button");

    expect(button).toHaveStyleRule("font-family", FONT_FAMILY_MAP.roboto);

    font = "serif";

    rerender(<Button text="Button text" font={font} />);
    expect(button).toHaveStyleRule("font-family", FONT_FAMILY_MAP.robotoSerif);
  });

  it("should render correct variant", () => {
    let variant: ButtonVariant = "primary";
    const { getByRole, rerender } = render(
      <Button text="Button text" variant={variant} />,
    );
    const button = getByRole("button");

    button.addEventListener("mouseover", () => {
      console.log("mouseover triggered");
    });
    button.addEventListener("mouseout", () => {
      console.log("mouseout triggered");
    });

    expect(button).toHaveStyleRule(
      "background-color",
      getBackgroundColor(variant, lightTheme),
    );
    expect(button).toHaveStyleRule("color", getTextColor(variant));
    expect(button).toHaveStyleRule("border", getBorder(variant));
    expect(button).toHaveStyleRule(
      "background-color",
      getHoverBackgroundColor(variant, lightTheme),
      {
        modifier: ":hover",
      },
    );

    variant = "regular";

    rerender(<Button text="Button text" variant={variant} />);
    expect(button).toHaveStyleRule(
      "background-color",
      getBackgroundColor(variant, lightTheme),
    );
    expect(button).toHaveStyleRule("color", getTextColor(variant));
    expect(button).toHaveStyleRule("border", getBorder(variant));
    expect(button).toHaveStyleRule(
      "background-color",
      getHoverBackgroundColor(variant, lightTheme),
      {
        modifier: ":hover",
      },
    );

    variant = "secondary";

    rerender(<Button text="Button text" variant={variant} />);
    expect(button).toHaveStyleRule(
      "background-color",
      getBackgroundColor(variant, lightTheme),
    );
    expect(button).toHaveStyleRule("color", getTextColor(variant));
    expect(button).toHaveStyleRule("border", getBorder(variant));
    expect(button).toHaveStyleRule(
      "background-color",
      getHoverBackgroundColor(variant, lightTheme),
      {
        modifier: ":hover",
      },
    );
  });

  it("should render left/right slots correctly", () => {
    const { getByText } = render(
      <Button
        text="Button text"
        leftSlot={<p>left slot</p>}
        rightSlot={<p>right slot</p>}
      />,
    );
    expect(getByText("Button text")).toBeInTheDocument();
    expect(getByText("left slot")).toBeInTheDocument();
    expect(getByText("right slot")).toBeInTheDocument();
  });
});
