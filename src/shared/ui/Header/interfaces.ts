import { ReactNode } from "react";

export interface HeaderProps {
  title: string;
  subtitle?: string;
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
}

export interface TextWrapperProps {
  $hasDivider: boolean;
}
