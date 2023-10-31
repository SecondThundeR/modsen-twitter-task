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
    <Root data-testid="root">
      <Wrapper data-testid="wrapper">
        <RootImage data-testid="root-image" $src={rootBackgroundPath} />
        <ContentWrapper data-testid="content-wrapper">
          {children}
        </ContentWrapper>
      </Wrapper>
      <Footer data-testid="footer">{footerElementsSlot}</Footer>
    </Root>
  );
});
