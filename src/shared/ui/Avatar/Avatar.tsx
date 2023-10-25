import { memo } from "react";

import { AvatarImage } from "./Avatar.styled";
import { AvatarProps } from "./interfaces";

export const Avatar = memo(function AvatarPlaceholder({
  width = 48,
  height = 48,
  src = "/avatarPlaceholder.png",
}: AvatarProps) {
  return <AvatarImage $width={width} $height={height} src={src} />;
});
