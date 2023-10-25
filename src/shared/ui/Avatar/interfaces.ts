export interface AvatarProps {
  width?: number;
  height?: number;
  src?: string;
}

export interface AvatarStyleProps {
  $width: NonNullable<AvatarProps["width"]>;
  $height: NonNullable<AvatarProps["height"]>;
}
