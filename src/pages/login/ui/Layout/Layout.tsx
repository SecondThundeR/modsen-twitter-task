import { type PropsWithChildren, memo } from "react";

import { Wrapper } from "./Layout.styled";

export const Layout = memo(function Layout({ children }: PropsWithChildren) {
  return <Wrapper data-testid="layout">{children}</Wrapper>;
});
