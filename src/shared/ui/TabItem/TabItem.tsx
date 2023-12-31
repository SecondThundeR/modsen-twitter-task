import { memo } from "react";

import { Text } from "@/shared/ui";

import type { TabItemProps } from "./interfaces";
import { Wrapper } from "./TabItem.styled";

export const TabItem = memo(function TabItem({ text }: TabItemProps) {
  return (
    <Wrapper>
      <Text text={text} font="serif" size="large" weight="bold" />
    </Wrapper>
  );
});
