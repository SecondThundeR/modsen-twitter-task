import { memo } from "react";

import { TextButton } from "../";

import { Wrapper, Image as StyledImage } from "./Image.styled";
import type { ImageProps } from "./interfaces";

export const Image = memo(function PreviewImage({
  src,
  buttonText,
  isButtonDisabled = false,
  onClick,
}: ImageProps) {
  if (!src) return null;

  return (
    <Wrapper>
      <StyledImage src={src} />
      {onClick && (
        <TextButton
          text={buttonText ?? "Button"}
          onClick={onClick}
          disabled={isButtonDisabled}
        />
      )}
    </Wrapper>
  );
});
