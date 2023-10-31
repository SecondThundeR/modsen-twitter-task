import { memo } from "react";

import type { LayoutProps } from "./interfaces";
import { Wrapper, OutletWrapper, SidebarWrapper } from "./Layout.styled";

export const Layout = memo(function MainLayout({
  outletSlot,
  navSlot,
  sidebarSlot,
}: LayoutProps) {
  return (
    <Wrapper>
      {navSlot}
      <OutletWrapper>{outletSlot}</OutletWrapper>
      <SidebarWrapper>{sidebarSlot}</SidebarWrapper>
    </Wrapper>
  );
});
