import { ReactNode } from "react";

export type TextWeight = "regular" | "medium" | "semibold";
export type TextSize = "small" | "regular" | "large";

export interface TextProps {
  text?: string | null;
  children?: ReactNode;
  size?: TextSize;
  weight?: TextWeight;
  isSubtext?: boolean;
}

export interface TextStyleProps {
  $size: TextSize;
  $weight: TextWeight;
  $isSubtext: boolean;
}
