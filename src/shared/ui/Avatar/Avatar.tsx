import { memo } from "react";

import { AvatarImage } from "./Avatar.styled";
import { AvatarProps } from "./interfaces";

const placeholderPath = "/avatarPlaceholder.png";

export const Avatar = memo(function Avatar({
  width = 48,
  height = 48,
  src,
}: AvatarProps) {
  return (
    <AvatarImage $width={width} $height={height} src={src ?? placeholderPath} />
  );
});
