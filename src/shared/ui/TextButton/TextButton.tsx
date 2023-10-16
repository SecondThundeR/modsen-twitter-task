import { memo } from "react";

import { TextButtonProps } from "./interfaces";
import { Button } from "./TextButton.styled";

export const TextButton = memo(function TextButton({
  text,
  onClick,
}: TextButtonProps) {
  return <Button onClick={onClick}>{text}</Button>;
});
