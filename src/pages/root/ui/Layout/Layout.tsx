import { LayoutProps } from "./interfaces";
import {
  Root,
  RootImage,
  Wrapper,
  ContentWrapper,
  Footer,
} from "./Layout.styled";

export const Layout = ({ children, footerElementsSlot }: LayoutProps) => {
  return (
    <Root>
      <Wrapper>
        <RootImage src="/homeBG.png" />
        <ContentWrapper>{children}</ContentWrapper>
      </Wrapper>
      <Footer>{footerElementsSlot}</Footer>
    </Root>
  );
};
