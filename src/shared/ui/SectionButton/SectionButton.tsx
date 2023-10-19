import { memo } from "react";

import { SectionButtonProps } from "./interfaces";
import { Button } from "./SectionButton.styled";

export const SectionButton = memo(function SectionButton({
  text,
  regularIcon: RegularIcon,
  filledIcon: FilledIcon = RegularIcon,
  isActive = false,
  onClick,
}: SectionButtonProps) {
  return (
    <Button $isActive={isActive} onClick={onClick}>
      {isActive ? (
        <FilledIcon width="28" height="28" />
      ) : (
        <RegularIcon width="28" height="28" />
      )}
      {text}
    </Button>
  );
});
