import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { SigninForm } from "@/features/authentication/signin";
import { IconLink } from "@/features/navigation";
import TwitterLogo from "@/shared/assets/logo.svg?react";
import { COLORS } from "@/shared/constants/colors";
import { RoutePaths } from "@/shared/lib/router";
import { TextButton, Title } from "@/shared/ui";

import { Layout } from "../Layout/Layout";

const Page = memo(function Page() {
  const navigate = useNavigate();

  const onSignupRedirect = useCallback(() => {
    navigate(RoutePaths.register);
  }, [navigate]);

  const onComplete = useCallback(() => {
    navigate(RoutePaths.home);
  }, [navigate]);

  return (
    <Layout>
      <IconLink
        icon={<TwitterLogo width="48" height="48" fill={COLORS.accent} />}
        destination={RoutePaths.landing}
      />
      <Title text="Log in to Twitter" />
      <SigninForm onComplete={onComplete} />
      <TextButton
        text="Sign up to Twitter"
        alignment="right"
        onClick={onSignupRedirect}
      />
    </Layout>
  );
});

export default Page;
