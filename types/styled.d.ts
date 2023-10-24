import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    body: string;
    liked: string;
    color: string;
    color20: string;
    color60: string;
    accent: string;
    accentHover: string;
    secondary: string;
    secondaryHover: string;
    error: string;
    success: string;
    iconInvert: string;
  }
}
