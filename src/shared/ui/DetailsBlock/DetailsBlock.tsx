import { memo } from "react";

import { Title } from "@/shared/ui";

import { Wrapper } from "./DetailsBlock.styled";
import type { DetailsBlockProps } from "./interfaces";

export const DetailsBlock = memo(function DetailsBlock({
  title,
  children,
}: DetailsBlockProps) {
  return (
    <Wrapper>
      <Title text={title} size="compact" />
      {children}
    </Wrapper>
  );
});
