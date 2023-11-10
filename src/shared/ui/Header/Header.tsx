import { memo } from "react";

import { Text, Title } from "../";

import { LeftSlotWrapper, TextWrapper, Wrapper } from "./Header.styled";
import type { HeaderProps } from "./interfaces";

export const Header = memo(function Header({
  title,
  subtitle,
  leftSlot,
  rightSlot,
}: HeaderProps) {
  const hasLeftSlot = !!leftSlot;
  const hasSubtitle = !!subtitle;

  return (
    <Wrapper>
      <LeftSlotWrapper>
        {leftSlot}
        <TextWrapper $hasDivider={hasLeftSlot}>
          <Title
            text={title}
            size={hasSubtitle ? "extrasmall" : "compact"}
            font="serif"
          />
          {subtitle && <Text text={subtitle} isSubtext />}
        </TextWrapper>
      </LeftSlotWrapper>
      {rightSlot}
    </Wrapper>
  );
});
