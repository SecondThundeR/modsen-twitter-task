import { memo } from "react";
import { Outlet } from "react-router-dom";

import type { LayoutProps } from "./interfaces";
import { Wrapper, OutletWrapper, SidebarWrapper } from "./Layout.styled";

export const Layout = memo(function MainLayout({
  navSlot,
  sidebarSlot,
}: LayoutProps) {
  return (
    <Wrapper>
      {navSlot}
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
      <SidebarWrapper>{sidebarSlot}</SidebarWrapper>
    </Wrapper>
  );
});
