import { memo } from "react";
import { TextLinkProps } from "./interfaces";
import { Link } from "./TextLink.styled";

export const TextLink = memo(function TextLink({
  href = "#",
  text,
  isDisabled = false,
}: TextLinkProps) {
  return (
    <Link $isDisabled={isDisabled} href={!isDisabled ? href : undefined}>
      {text}
    </Link>
  );
});
