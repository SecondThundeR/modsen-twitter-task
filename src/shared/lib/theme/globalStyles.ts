import { createGlobalStyle, DefaultTheme } from "styled-components";

import { COLORS } from "@/shared/constants/colors";
import { FONT_FAMILY_MAP } from "@/shared/constants/fontFamily";
import { FULL_INVERT, NO_INVERT } from "@/shared/constants/generalStyles";
import { WEIGHTS_MAP } from "@/shared/constants/weights";

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.color};
    font-family: ${`${FONT_FAMILY_MAP.roboto}, ${FONT_FAMILY_MAP.robotoSerif}, sans-serif`};
    font-weight: ${WEIGHTS_MAP.regular};
  }
`;

export const lightTheme: DefaultTheme = {
  body: COLORS.white,
  color: COLORS.black,
  color20: COLORS.black20,
  color60: COLORS.black60,
  accent: COLORS.accent,
  accentHover: COLORS.accentHover,
  secondary: COLORS.secondary,
  secondaryHover: COLORS.secondaryHover,
  error: COLORS.error,
  success: COLORS.success,
  iconInvert: NO_INVERT,
};

export const darkTheme: DefaultTheme = {
  body: COLORS.black,
  color: COLORS.white,
  color20: COLORS.white20,
  color60: COLORS.white60,
  accent: COLORS.accentDark,
  accentHover: COLORS.accentDarkHover,
  secondary: COLORS.secondaryDark,
  secondaryHover: COLORS.secondaryDarkHover,
  error: COLORS.errorDark,
  success: COLORS.successDark,
  iconInvert: FULL_INVERT,
};
