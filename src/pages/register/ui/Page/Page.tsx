import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { SignupForm } from "@/features/authentication/signup";
import { IconLink } from "@/features/navigation";
import TwitterLogo from "@/shared/assets/logo.svg?react";
import { COLORS } from "@/shared/constants/colors";
import { RoutePaths } from "@/shared/lib/router";
import { Title } from "@/shared/ui";

import { Layout } from "../Layout/Layout";

const Page = memo(function Page() {
  const navigate = useNavigate();

  const onComplete = useCallback(() => {
    navigate(RoutePaths.home);
  }, [navigate]);

  return (
    <Layout>
      <IconLink
        icon={<TwitterLogo width="48" height="48" fill={COLORS.accent} />}
        destination={RoutePaths.landing}
      />
      <Title text="Create an account" size="small" weight="bold" font="serif" />
      <SignupForm onComplete={onComplete} />
    </Layout>
  );
});

export default Page;
