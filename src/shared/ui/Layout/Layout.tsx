import { memo } from "react";
import { Outlet } from "react-router-dom";

import { LayoutProps } from "./interfaces";
import { Wrapper } from "./Layout.styled";

export const Layout = memo(function MainLayout({
  navSlot,
  sidebarSlot,
}: LayoutProps) {
  return (
    <Wrapper>
      {navSlot}
      {<Outlet />}
      {sidebarSlot}
    </Wrapper>
  );
});
