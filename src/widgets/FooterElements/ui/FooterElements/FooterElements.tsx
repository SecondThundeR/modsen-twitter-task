import { memo } from "react";

import { ROOT_FOOTER_DATA } from "@/shared/constants/footer";
import { TextLink, Text } from "@/shared/ui";

export const FooterElements = memo(function FooterElements() {
  return (
    <>
      {ROOT_FOOTER_DATA.map((data) => {
        const { id, ...props } = data;
        return <TextLink key={id} {...props} />;
      })}
      <Text text="© 2023 Twitter, Inc." />
    </>
  );
});
