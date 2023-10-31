import { memo } from "react";

import { Text } from "@/shared/ui";

import type { LoaderProps } from "./interfaces";
import { LoaderWrapper, Spinner } from "./Loader.styled";

export const Loader = memo(function Loader({
  text,
  inline = false,
}: LoaderProps) {
  return (
    <LoaderWrapper $disablePadding={inline}>
      <Spinner $inline={inline} data-testid="spinner" />
      <Text text={text} size="large" isSubtext />
    </LoaderWrapper>
  );
});
