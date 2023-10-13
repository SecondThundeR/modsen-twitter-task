import { memo } from "react";
import { TextLinkProps } from "./interfaces";
import { Link } from "./TextLink.styled";

export const TextLink = memo(function TextLink({
  href = "#",
  text,
  isDisabled = false,
  size = "regular",
  type = "regular",
}: TextLinkProps) {
  return (
    <Link
      $isDisabled={isDisabled}
      $size={size}
      $type={type}
      href={!isDisabled ? href : undefined}
    >
      {text}
    </Link>
  );
});
