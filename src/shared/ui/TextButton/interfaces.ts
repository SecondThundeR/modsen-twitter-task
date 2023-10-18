import { ButtonHTMLAttributes } from "react";

export interface TextButtonProps
  extends Pick<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  text: string;
}
