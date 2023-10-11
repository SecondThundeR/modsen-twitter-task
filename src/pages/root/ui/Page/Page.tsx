import { memo, useMemo } from "react";

import GoogleLogo from "@/shared/assets/googleLogo.svg?react";
import TwitterLogo from "@/shared/assets/logo.svg?react";
import { COLORS } from "@/shared/constants/colors";
import { ROOT_FOOTER_DATA } from "@/shared/constants/footer";
import { Button, Title, Text, TextLink } from "@/shared/ui";

import { Layout } from "../Layout/Layout";
import { ButtonsWrapper } from "./Page.styled";

const Page = memo(function Page() {
  const footerElements = useMemo(() => {
    return (
      <>
        {ROOT_FOOTER_DATA.map((data) => {
          const { id, ...props } = data;
          return <TextLink key={id} {...props} />;
        })}
        <Text text="© 2023 Twitter, Inc." />
      </>
    );
  }, []);

  return (
    <Layout footerElementsSlot={footerElements}>
      <TwitterLogo width="48" height="48" fill={COLORS.accent} />
      <Title text="Happening now" size="large" />
      <Title text="Join Twitter Today" />
      <ButtonsWrapper>
        <Button leftSlot={<GoogleLogo />} text="Sign up with Google" />
        <Button text="Sign up with email" />
      </ButtonsWrapper>
    </Layout>
  );
});

export default Page;
