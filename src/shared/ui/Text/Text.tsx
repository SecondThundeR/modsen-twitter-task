import { memo } from "react";
import { TextProps } from "./interfaces";
import { Wrapper } from "./Text.styled";

export const Text = memo(function Text({
  text,
  children,
  size = "regular",
}: TextProps) {
  return <Wrapper $size={size}>{text ?? children}</Wrapper>;
});
