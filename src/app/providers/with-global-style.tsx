import { ThemeProvider } from "@/entities/theme";

export const withGlobalStyle = (component: () => React.ReactNode) => () => (
  <ThemeProvider>{component()}</ThemeProvider>
);
