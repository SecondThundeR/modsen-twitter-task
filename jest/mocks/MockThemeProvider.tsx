import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, darkTheme, lightTheme } from "../../src/shared/lib/theme";

export function MockThemeProvider({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

export function MockDarkThemeProvider({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
