import { memo } from "react";

import { ChangeThemeToggle } from "@/features/theme";
import { Header } from "@/shared/ui";

const Page = memo(function Page() {
  return (
    <>
      <Header title="Home" rightSlot={<ChangeThemeToggle />} />
      <h1>Home page</h1>
    </>
  );
});

export default Page;
