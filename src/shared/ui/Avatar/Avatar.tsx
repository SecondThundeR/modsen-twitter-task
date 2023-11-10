import { memo } from "react";

import { avatarPlaceholderPath } from "../../constants/publicImagesPaths";

import { AvatarImage } from "./Avatar.styled";
import type { AvatarProps } from "./interfaces";

export const Avatar = memo(function Avatar({
  width = 48,
  height = 48,
  src,
}: AvatarProps) {
  return (
    <AvatarImage
      $width={width}
      $height={height}
      src={src ?? avatarPlaceholderPath}
    />
  );
});
