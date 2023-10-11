export type TitleSizes = "regular" | "large";

export type TitleProps = {
  text: string;
  size?: TitleSizes;
};

export type TitleWrapperProps = {
  $size: TitleSizes;
};
