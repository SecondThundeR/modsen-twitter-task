import { ReactNode } from "react";

import { FontsVariants } from "@/shared/types/fontsVariants";

export type TextWeight = "regular" | "medium" | "semibold" | "bold";
export type TextSize = "small" | "regular" | "large";

export interface TextProps {
  text?: string | null;
  children?: ReactNode;
  size?: TextSize;
  font?: FontsVariants;
  weight?: TextWeight;
  isSubtext?: boolean;
}

export interface TextStyleProps {
  $size: TextSize;
  $font: FontsVariants;
  $weight: TextWeight;
  $isSubtext: boolean;
}
