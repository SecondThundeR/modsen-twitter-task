import { memo } from "react";

import { TweetsList } from "@/widgets/TweetsList";
import { ChangeThemeToggle } from "@/features/theme";
import { TweetComposer } from "@/features/tweet";
import { Header } from "@/shared/ui";

const Page = memo(function Page() {
  return (
    <>
      <Header title="Home" rightSlot={<ChangeThemeToggle />} />
      <TweetComposer />
      <TweetsList />
    </>
  );
});

export default Page;
