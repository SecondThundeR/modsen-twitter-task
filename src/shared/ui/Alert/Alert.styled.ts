import styled from "styled-components";

import { COLORS } from "@/shared/constants/colors";
import { DISPLAY_MAP, FLEX_PROPERTIES } from "@/shared/constants/generalStyles";
import { GAP_MAP, PADDING_MAP, RADIUS_MAP } from "@/shared/constants/sizing";

import { AlertStyleProps } from "./interfaces";

export const Wrapper = styled.div<AlertStyleProps>`
  display: ${DISPLAY_MAP.flex};
  flex-direction: ${FLEX_PROPERTIES.column};
  gap: ${GAP_MAP.regular};
  color: ${COLORS.white};
  background-color: ${({ $variant }) => COLORS[$variant]};
  padding: ${PADDING_MAP.alert};
  border-radius: ${RADIUS_MAP.alert};
`;
