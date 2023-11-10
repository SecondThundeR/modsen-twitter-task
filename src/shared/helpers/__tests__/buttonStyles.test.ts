import { COLORS } from "../../constants/colors";
import { NONE } from "../../constants/generalStyles";

import {
  getBackgroundColor,
  getHoverBackgroundColor,
  getTextColor,
  getBorder,
} from "../buttonStyles";

describe("buttonStyles", () => {
  const lightTheme = {
    accent: COLORS.accent,
    accentHover: COLORS.accentHover,
    secondary: COLORS.secondary,
    secondaryHover: COLORS.secondaryHover,
  };

  const darkTheme = {
    accent: COLORS.accentDark,
    accentHover: COLORS.accentDarkHover,
    secondary: COLORS.secondaryDark,
    secondaryHover: COLORS.secondaryDarkHover,
  };

  it("should return the correct background color for different variants", () => {
    expect(getBackgroundColor("regular", lightTheme)).toEqual(COLORS.white);
    expect(getBackgroundColor("primary", lightTheme)).toEqual(COLORS.accent);
    expect(getBackgroundColor("secondary", lightTheme)).toEqual(
      COLORS.secondary,
    );

    expect(getBackgroundColor("regular", darkTheme)).toEqual(COLORS.white);
    expect(getBackgroundColor("primary", darkTheme)).toEqual(COLORS.accentDark);
    expect(getBackgroundColor("secondary", darkTheme)).toEqual(
      COLORS.secondaryDark,
    );
  });

  it("should return the correct background hover color for different variants", () => {
    expect(getHoverBackgroundColor("regular", lightTheme)).toEqual(
      COLORS.accent,
    );
    expect(getHoverBackgroundColor("primary", lightTheme)).toEqual(
      COLORS.accentHover,
    );
    expect(getHoverBackgroundColor("secondary", lightTheme)).toEqual(
      COLORS.secondaryHover,
    );

    expect(getHoverBackgroundColor("regular", darkTheme)).toEqual(
      COLORS.accentDark,
    );
    expect(getHoverBackgroundColor("primary", darkTheme)).toEqual(
      COLORS.accentDarkHover,
    );
    expect(getHoverBackgroundColor("secondary", darkTheme)).toEqual(
      COLORS.secondaryDarkHover,
    );
  });

  it("should return the correct text color for different variants", () => {
    expect(getTextColor("regular")).toEqual(COLORS.black);
    expect(getTextColor("primary")).toEqual(COLORS.white);
    expect(getTextColor("secondary")).toEqual(COLORS.white);
  });

  it("should return the correct border for different variants", () => {
    expect(getBorder("regular")).toEqual(`1px solid ${COLORS.border}`);
    expect(getBorder("primary")).toEqual(NONE);
    expect(getBorder("secondary")).toEqual(NONE);
  });
});
