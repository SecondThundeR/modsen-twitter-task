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
export type TitleFonts = "regular" | "serif";
export type TitleWidths = "full" | "fit";

export type TitleProps = {
  text: string;
  width?: TitleWidths;
  size?: TitleSizes;
  weight?: TitleWeights;
  font?: TitleFonts;
};

export type TitleWrapperProps = {
  $size: TitleSizes;
  $width: TitleWidths;
  $weight: TitleWeights;
  $font: TitleFonts;
};
