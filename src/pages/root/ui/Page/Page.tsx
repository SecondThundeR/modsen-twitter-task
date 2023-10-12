import { memo } from "react";

import { FooterElements } from "@/widgets/FooterElements";
import { SignupButtons } from "@/widgets/SignupButtons";
import TwitterLogo from "@/shared/assets/logo.svg?react";
import { COLORS } from "@/shared/constants/colors";
import { Title } from "@/shared/ui";

import { Layout } from "../Layout/Layout";

const Page = memo(function Page() {
  return (
    <Layout footerElementsSlot={<FooterElements />}>
      <TwitterLogo width="48" height="48" fill={COLORS.accent} />
      <Title text="Happening now" size="large" />
      <Title text="Join Twitter Today" />
      <SignupButtons />
    </Layout>
  );
});

export default Page;
