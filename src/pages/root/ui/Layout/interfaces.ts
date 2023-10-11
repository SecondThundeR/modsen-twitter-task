import { PropsWithChildren, ReactNode } from "react";

export interface LayoutProps extends PropsWithChildren {
  footerElementsSlot: ReactNode;
}
