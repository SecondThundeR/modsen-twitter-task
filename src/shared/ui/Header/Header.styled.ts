import styled from "styled-components";

import { COLORS } from "@/shared/constants/colors";
import {
  BORDER_BOX,
  DISPLAY_MAP,
  FLEX_PROPERTIES,
  NO_BORDER,
} from "@/shared/constants/generalStyles";
import {
  DIMENSIONS_MAP,
  GAP_MAP,
  PADDING_MAP,
} from "@/shared/constants/sizing";
import { TextWrapperProps } from "./interfaces";

export const Wrapper = styled.header`
  box-sizing: ${BORDER_BOX};
  width: ${DIMENSIONS_MAP.full};
  height: ${DIMENSIONS_MAP.headerSize};
  border-bottom: ${`1px solid ${COLORS.sectionBorder}`};
  display: ${DISPLAY_MAP.flex};
  align-items: ${FLEX_PROPERTIES.alignCenter};
  padding: ${PADDING_MAP.header};
  justify-content: space-between;
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
    $hasDivider ? `1px solid ${COLORS.slotBorder}` : NO_BORDER};
`;
