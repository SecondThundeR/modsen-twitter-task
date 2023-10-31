/* eslint-disable react-refresh/only-export-components */
import { RenderOptions, render } from "@testing-library/react";
import { PropsWithChildren, ReactElement } from "react";
import {
  MockThemeProvider,
  MockDarkThemeProvider,
} from "./mocks/MockThemeProvider";

const LightThemeWrapper = ({ children }: PropsWithChildren) => {
  return <MockThemeProvider>{children}</MockThemeProvider>;
};

const DarkThemeWrapper = ({ children }: PropsWithChildren) => {
  return <MockDarkThemeProvider>{children}</MockDarkThemeProvider>;
};

const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: LightThemeWrapper, ...options });

const customDarkRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: DarkThemeWrapper, ...options });

export * from "@testing-library/react";

export { customRender as render };
export { customDarkRender as darkRender };
