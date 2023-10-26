import { memo } from "react";

import { rootBackgroundPath } from "@/shared/constants/publicImagesPaths";

import type { LayoutProps } from "./interfaces";
import {
  Root,
  RootImage,
  Wrapper,
  ContentWrapper,
  Footer,
} from "./Layout.styled";

export const Layout = memo(function Layout({
  children,
  footerElementsSlot,
}: LayoutProps) {
  return (
    <Root>
      <Wrapper>
        <RootImage $src={rootBackgroundPath} />
        <ContentWrapper>{children}</ContentWrapper>
      </Wrapper>
      <Footer>{footerElementsSlot}</Footer>
    </Root>
  );
});
