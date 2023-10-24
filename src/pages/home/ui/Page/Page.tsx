import { memo } from "react";

import { TweetsList } from "@/widgets/TweetsList/ui/TweetsList/TweetsList";
import { ChangeThemeToggle } from "@/features/theme";
import { Header } from "@/shared/ui";

const Page = memo(function Page() {
  return (
    <>
      <Header title="Home" rightSlot={<ChangeThemeToggle />} />
      <TweetsList />
    </>
  );
});

export default Page;
