import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonFonts = "regular" | "serif";
export type ButtonVariant = "regular" | "primary";

export interface ButtonProps
  extends Pick<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "onClick" | "disabled" | "type"
  > {
  text: string;
  font?: ButtonFonts;
  variant?: ButtonVariant;
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
}

export interface ButtonStyleProps {
  $font: ButtonFonts;
  $variant: ButtonVariant;
}
