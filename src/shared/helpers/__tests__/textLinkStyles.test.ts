import { COLORS } from "../../constants/colors";
import {
  NO_DECORATION,
  UNDERLINE_DECORATION,
} from "../../constants/generalStyles";
import { FONT_SIZE_MAP } from "../../constants/sizing";

import {
  getTextColor,
  getFontSize,
  getTextDecoration,
} from "../textLinkStyles";

describe("textLinkStyles", () => {
  const lightTheme = {
    color: COLORS.black,
    accent: COLORS.accent,
  };

  const darkTheme = {
    color: COLORS.white,
    accent: COLORS.accentDark,
  };

  it("should return color if type is regular", () => {
    expect(getTextColor("regular", lightTheme)).toBe(COLORS.black);
    expect(getTextColor("primary", lightTheme)).toBe(COLORS.accent);

    expect(getTextColor("regular", darkTheme)).toBe(COLORS.white);
    expect(getTextColor("primary", darkTheme)).toBe(COLORS.accentDark);
  });

  it("should return small if size is regular", () => {
    expect(getFontSize("regular")).toBe(FONT_SIZE_MAP.text.small);
    expect(getFontSize("inherit")).toBe(FONT_SIZE_MAP.text.inherit);
  });

  it("should return NO_DECORATION if isDisabled is true", () => {
    expect(getTextDecoration(true)).toBe(NO_DECORATION);
  });

  it("should return UNDERLINE_DECORATION if isDisabled is false", () => {
    expect(getTextDecoration(false)).toBe(UNDERLINE_DECORATION);
  });
});
