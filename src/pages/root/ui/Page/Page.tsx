import { memo } from "react";

import { FooterElements } from "@/widgets/FooterElements";
import { SignupButtons } from "@/widgets/SignupButtons";
import TwitterLogo from "@/shared/assets/logo.svg?react";
import { COLORS } from "@/shared/constants/colors";
import { useHomeRedirect } from "@/shared/lib/hooks";
import { Link, RoutePaths } from "@/shared/lib/router";
import { Text, TextLink, Title } from "@/shared/ui";

import { Layout } from "../Layout/Layout";

const Page = memo(function Page() {
  useHomeRedirect();

  return (
    <Layout footerElementsSlot={<FooterElements />}>
      <TwitterLogo width="48" height="48" fill={COLORS.accent} />
      <Title text="Happening now" size="large" />
      <Title text="Join Twitter Today" />
      <SignupButtons />
      <Text>
        By signing up you agree to the{" "}
        <TextLink size="inherit" type="primary" text="Terms of Service" /> and{" "}
        <TextLink size="inherit" type="primary" text="Privacy Policy" />,
        including <TextLink size="inherit" type="primary" text="Cookie Use" />
      </Text>
      <Text size="large">
        Already have an account? <Link to={RoutePaths.register}>Log in</Link>
      </Text>
    </Layout>
  );
});

export default Page;
