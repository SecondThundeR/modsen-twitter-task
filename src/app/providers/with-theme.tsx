import type { ReactNode } from "react";

import { ThemeProvider } from "styled-components";
import { selectCurrentTheme } from "@/entities/theme";
import { useAppSelector } from "@/shared/lib/hooks";
import { GlobalStyle, darkTheme, lightTheme } from "@/shared/lib/theme";

export const withTheme = (component: () => ReactNode) => () => {
  const currentTheme = useAppSelector(selectCurrentTheme);
  const styledTheme = currentTheme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={styledTheme}>
      <GlobalStyle />
      {component()}
    </ThemeProvider>
  );
};
