import { memo } from "react";

import { SIDEBAR_FOOTER_DATA } from "@/shared/constants/footer";
import { TextLink, Text } from "@/shared/ui";

export const SidebarFooterElements = memo(function SidebarFooterElements() {
  return (
    <>
      {SIDEBAR_FOOTER_DATA.map((data) => {
        const { id, ...props } = data;
        return <TextLink key={id} {...props} />;
      })}
      <Text size="small" text="© 2023 Twitter, Inc." />
    </>
  );
});
