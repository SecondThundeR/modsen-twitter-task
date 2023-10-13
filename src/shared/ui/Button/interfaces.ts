import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps
  extends Pick<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "onClick" | "disabled"
  > {
  text: string;
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
}
