import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    body: string;
    bodyModal: string;
    sidebarBlockBody: string;
    sidebarBlockText: string;
    liked: string;
    color: string;
    colorAlert: string;
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
