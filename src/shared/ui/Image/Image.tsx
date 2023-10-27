import { memo } from "react";

import { TextButton } from "@/shared/ui";

import { Wrapper, Image as StyledImage } from "./Image.styled";
import type { ImageProps } from "./interfaces";

export const Image = memo(function PreviewImage({
  src,
  buttonText,
  onClick,
}: ImageProps) {
  if (!src) return null;

  return (
    <Wrapper>
      <StyledImage src={src} />
      {onClick && (
        <TextButton text={buttonText ?? "Button"} onClick={onClick} />
      )}
    </Wrapper>
  );
});
