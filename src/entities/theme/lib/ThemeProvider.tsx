import { memo } from "react";
import { ThemeProvider as StyledProvider } from "styled-components";

import { useAppSelector } from "@/shared/lib/hooks";
import { GlobalStyle, darkTheme, lightTheme } from "@/shared/lib/theme";

import { selectCurrentTheme } from "..";
import type { ThemeProviderProps } from "./interfaces";

export const ThemeProvider = memo(function ThemeProvider({
  children,
}: ThemeProviderProps) {
  const currentTheme = useAppSelector(selectCurrentTheme);
  const styledTheme = currentTheme === "light" ? lightTheme : darkTheme;

  return (
    <StyledProvider theme={styledTheme}>
      <GlobalStyle />
      {children}
    </StyledProvider>
  );
});
