import { memo } from "react";

import { Text, Title } from "@/shared/ui";

import { LeftSlotWrapper, TextWrapper, Wrapper } from "./Header.styled";
import { HeaderProps } from "./interfaces";

export const Header = memo(function Header({
  title,
  subtitle,
  leftSlot,
  rightSlot,
}: HeaderProps) {
  return (
    <Wrapper>
      <LeftSlotWrapper>
        {leftSlot}
        <TextWrapper $hasDivider={!!leftSlot}>
          <Title text={title} size="extrasmall" font="serif" />
          {subtitle && <Text text={subtitle} isSubtext />}
        </TextWrapper>
      </LeftSlotWrapper>
      {rightSlot}
    </Wrapper>
  );
});
