export interface AvatarPlaceholderProps {
  width?: number;
  height?: number;
}

export interface AvatarPlaceholderStyleProps {
  $width: NonNullable<AvatarPlaceholderProps["width"]>;
  $height: NonNullable<AvatarPlaceholderProps["height"]>;
}
