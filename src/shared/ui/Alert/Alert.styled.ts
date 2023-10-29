import styled from "styled-components";

import { DISPLAY_MAP, FLEX_PROPERTIES } from "@/shared/constants/generalStyles";
import { GAP_MAP, PADDING_MAP, RADIUS_MAP } from "@/shared/constants/sizing";

import type { AlertStyleProps } from "./interfaces";

export const Wrapper = styled.div<AlertStyleProps>`
  display: ${DISPLAY_MAP.flex};
  flex-direction: ${FLEX_PROPERTIES.column};
  gap: ${GAP_MAP.regular};
  color: ${({ theme: { colorAlert } }) => colorAlert};
  background-color: ${({ theme: { error, success }, $variant }) =>
    $variant === "error" ? error : success};
  padding: ${PADDING_MAP.alert};
  border-radius: ${RADIUS_MAP.alert};
`;
