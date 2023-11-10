import { memo } from "react";

import { TweetsList } from "@/widgets/TweetsList";
import { BackButton } from "@/features/navigation";
import { useSearchRedirect } from "@/features/search";
import { ChangeThemeToggle } from "@/features/theme";
import { useSearchQuery } from "@/shared/lib/router";
import { Header } from "@/shared/ui";

const Page = memo(function Page() {
  const searchQuery = useSearchQuery();

  useSearchRedirect();

  return (
    <>
      <Header
        title="Search"
        subtitle={searchQuery}
        leftSlot={<BackButton />}
        rightSlot={<ChangeThemeToggle />}
      />
      <TweetsList queryString={searchQuery} />
    </>
  );
});

export default Page;
