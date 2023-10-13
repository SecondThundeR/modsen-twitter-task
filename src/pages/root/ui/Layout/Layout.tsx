import { memo } from "react";

import { LayoutProps } from "./interfaces";
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
        <RootImage $src="/rootBackground.png" />
        <ContentWrapper>{children}</ContentWrapper>
      </Wrapper>
      <Footer>{footerElementsSlot}</Footer>
    </Root>
  );
});
