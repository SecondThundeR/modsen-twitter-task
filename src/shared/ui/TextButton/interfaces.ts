import type { ButtonHTMLAttributes } from "react";

export type TextButtonAlignments = "left" | "center" | "right";

export interface TextButtonProps
  extends Pick<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "onClick" | "disabled"
  > {
  text: string;
  alignment?: TextButtonAlignments;
}

export interface TextButtonStyleProps {
  $alignment: TextButtonAlignments;
}
