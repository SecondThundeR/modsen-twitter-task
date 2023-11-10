import type { PropsWithChildren } from "react";

import { ThemeProvider as StyledProvider } from "styled-components";
import { selectCurrentTheme } from "@/entities/theme";
import { useAppSelector } from "@/shared/lib/hooks";
import { GlobalStyle, darkTheme, lightTheme } from "@/shared/lib/theme";

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const currentTheme = useAppSelector(selectCurrentTheme);
  const styledTheme = currentTheme === "light" ? lightTheme : darkTheme;

  return (
    <StyledProvider theme={styledTheme}>
      <GlobalStyle />
      {children}
    </StyledProvider>
  );
};
