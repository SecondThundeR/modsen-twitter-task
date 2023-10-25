import styled from "styled-components";

import { COLORS } from "@/shared/constants/colors";
import {
  BORDER_BOX,
  DISPLAY_MAP,
  FLEX_PROPERTIES,
  NONE,
  POSITION_MAP,
  STICKY_TOP,
  TOP_INDEX,
} from "@/shared/constants/generalStyles";
import {
  DIMENSIONS_MAP,
  GAP_MAP,
  PADDING_MAP,
} from "@/shared/constants/sizing";
import { TextWrapperProps } from "./interfaces";

export const Wrapper = styled.header`
  position: ${POSITION_MAP.sticky};
  top: ${STICKY_TOP};
  background-color: ${({ theme: { body } }) => body};
  box-sizing: ${BORDER_BOX};
  width: ${DIMENSIONS_MAP.full};
  height: ${DIMENSIONS_MAP.header};
  border-bottom: ${`1px solid ${COLORS.sectionBorder}`};
  display: ${DISPLAY_MAP.flex};
  align-items: ${FLEX_PROPERTIES.alignCenter};
  padding: ${PADDING_MAP.header};
  justify-content: ${FLEX_PROPERTIES.justifyBetween};
  z-index: ${TOP_INDEX};
`;

export const LeftSlotWrapper = styled.div`
  display: ${DISPLAY_MAP.flex};
  gap: ${GAP_MAP.regular};
  align-items: ${FLEX_PROPERTIES.alignCenter};
`;

export const TextWrapper = styled.div<TextWrapperProps>`
  display: ${DISPLAY_MAP.flex};
  flex-direction: ${FLEX_PROPERTIES.column};
  gap: ${GAP_MAP.regular};
  padding-left: ${({ $hasDivider }) => ($hasDivider ? GAP_MAP.regular : 0)};
  border-left: ${({ $hasDivider }) =>
    $hasDivider ? `1px solid ${COLORS.slotBorder}` : NONE};
`;
