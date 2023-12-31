import type { ReactNode } from "react";

export interface HeaderProps {
  title?: string | null;
  subtitle?: string;
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
}

export interface TextWrapperProps {
  $hasDivider: boolean;
}
