import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonFonts = "regular" | "serif";
export type ButtonVariant = "regular" | "primary" | "secondary";
export type ButtonWidths = "full" | "fit";
export type ButtonSizes = "regular" | "compact";

export interface ButtonProps
  extends Pick<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "onClick" | "disabled" | "type"
  > {
  text: string;
  width?: ButtonWidths;
  size?: ButtonSizes;
  font?: ButtonFonts;
  variant?: ButtonVariant;
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
}

export interface ButtonStyleProps {
  $width: ButtonWidths;
  $size: ButtonSizes;
  $font: ButtonFonts;
  $variant: ButtonVariant;
}
