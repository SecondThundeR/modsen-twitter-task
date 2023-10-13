import { ReactNode } from "react";

export type TextSize = "small" | "regular" | "large";

export interface TextProps {
  text?: string;
  children?: ReactNode;
  size?: TextSize;
}

export interface TextStyleProps {
  $size: TextSize;
}
