import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps
  extends Pick<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  text: string;
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
}
