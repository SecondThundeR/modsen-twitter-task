import type { ButtonHTMLAttributes, ReactNode } from "react";

import type { FontsVariants } from "@/shared/types/fontsVariants";

export type ButtonVariant = "regular" | "primary" | "secondary";
export type ButtonWidths = "full" | "fit";
export type ButtonSizes = "regular" | "compact" | "small";

export interface ButtonProps
  extends Pick<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "onClick" | "disabled" | "type"
  > {
  text: string;
  width?: ButtonWidths;
  size?: ButtonSizes;
  font?: FontsVariants;
  variant?: ButtonVariant;
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
}

export interface ButtonStyleProps {
  $width: ButtonWidths;
  $size: ButtonSizes;
  $font: FontsVariants;
  $variant: ButtonVariant;
}
