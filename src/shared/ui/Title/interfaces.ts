import { ReactNode } from "react";

import { FontsVariants } from "@/shared/types/fontsVariants";

export type TitleWeights =
  | "regular"
  | "medium"
  | "bold"
  | "extrabold"
  | "black";
export type TitleSizes =
  | "extrasmall"
  | "compact"
  | "small"
  | "regular"
  | "large";
export type TitleWidths = "full" | "fit";

export type TitleProps = {
  text?: string | null;
  children?: ReactNode;
  width?: TitleWidths;
  size?: TitleSizes;
  weight?: TitleWeights;
  font?: FontsVariants;
};

export type TitleWrapperProps = {
  $size: TitleSizes;
  $width: TitleWidths;
  $weight: TitleWeights;
  $font: FontsVariants;
};
