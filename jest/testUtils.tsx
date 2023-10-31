/* eslint-disable react-refresh/only-export-components */
import { RenderOptions, render } from "@testing-library/react";
import { PropsWithChildren, ReactElement } from "react";

import { MockRouterProvider } from "./mocks/MockRouterProvider";
import {
  MockThemeProvider,
  MockDarkThemeProvider,
} from "./mocks/MockThemeProvider";

const LightThemeWrapper = ({ children }: PropsWithChildren) => {
  return (
    <MockRouterProvider>
      <MockThemeProvider>{children}</MockThemeProvider>
    </MockRouterProvider>
  );
};

const DarkThemeWrapper = ({ children }: PropsWithChildren) => {
  return (
    <MockRouterProvider>
      <MockDarkThemeProvider>{children}</MockDarkThemeProvider>
    </MockRouterProvider>
  );
};

const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: LightThemeWrapper, ...options });

const customDarkRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: DarkThemeWrapper, ...options });

export * from "@testing-library/react";

export { customRender as render };
export { customDarkRender as darkRender };
