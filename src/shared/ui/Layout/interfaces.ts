import type { ReactNode } from "react";

export interface LayoutProps {
  outletSlot: ReactNode;
  navSlot?: ReactNode;
  sidebarSlot?: ReactNode;
}
