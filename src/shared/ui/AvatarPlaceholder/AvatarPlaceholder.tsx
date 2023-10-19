import { memo } from "react";

import { Avatar } from "./AvatarPlaceholder.styled";
import { AvatarPlaceholderProps } from "./interfaces";

export const AvatarPlaceholder = memo(function AvatarPlaceholder({
  width = 48,
  height = 48,
}: AvatarPlaceholderProps) {
  return (
    <Avatar $width={width} $height={height} src="/avatarPlaceholder.png" />
  );
});
