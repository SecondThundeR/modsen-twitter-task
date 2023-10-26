import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface IconButtonProps
  extends Pick<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "onClick" | "disabled"
  > {
  icon: ReactNode;
  hasInvert?: boolean;
}

export interface IconButtonStyleProps {
  $hasInvert: boolean;
}
