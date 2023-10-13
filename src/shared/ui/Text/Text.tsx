import { TextProps } from "./interfaces";
import { Wrapper } from "./Text.styled";

export function Text({ text, children, size = "regular" }: TextProps) {
  return <Wrapper $size={size}>{text ?? children}</Wrapper>;
}
