export type TitleWeights =
  | "regular"
  | "medium"
  | "bold"
  | "extrabold"
  | "black";
export type TitleSizes = "extrasmall" | "small" | "regular" | "large";
export type TitleFonts = "regular" | "serif";

export type TitleProps = {
  text: string;
  size?: TitleSizes;
  weight?: TitleWeights;
  font?: TitleFonts;
};

export type TitleWrapperProps = {
  $size: TitleSizes;
  $weight: TitleWeights;
  $font: TitleFonts;
};
