import { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";

export function MockRouterProvider({ children }: PropsWithChildren) {
  return <BrowserRouter>{children}</BrowserRouter>;
}
