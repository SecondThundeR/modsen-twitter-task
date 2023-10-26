import styled from "styled-components";

import { COLORS } from "@/shared/constants/colors";
import {
  BORDER_BOX,
  DISPLAY_MAP,
  FLEX_PROPERTIES,
  NONE,
} from "@/shared/constants/generalStyles";
import {
  DIMENSIONS_MAP,
  GAP_MAP,
  PADDING_MAP,
} from "@/shared/constants/sizing";
import type { TweetComposerStyledProps } from "./interfaces";

export const Wrapper = styled.div<TweetComposerStyledProps>`
  box-sizing: ${BORDER_BOX};
  width: ${DIMENSIONS_MAP.full};
  display: ${DISPLAY_MAP.flex};
  gap: ${GAP_MAP.medium};
  padding: ${PADDING_MAP.composerWrapper};
  border-bottom: ${({ $isStandalone }) =>
    $isStandalone ? NONE : `1px solid ${COLORS.sectionBorder}`};
`;

export const ComposerWrapper = styled.div`
  display: ${DISPLAY_MAP.flex};
  flex-direction: ${FLEX_PROPERTIES.column};
  gap: ${GAP_MAP.regular};
  flex: 1;
`;

export const ControlsWrapper = styled.div`
  display: ${DISPLAY_MAP.flex};
  justify-content: ${FLEX_PROPERTIES.justifyBetween};
  align-items: ${FLEX_PROPERTIES.alignCenter};
`;

export const ButtonWrapper = styled.div`
  display: ${DISPLAY_MAP.flex};
  align-items: ${FLEX_PROPERTIES.alignCenter};
  gap: ${GAP_MAP.medium};
`;

export const AlertWrapper = styled.div`
  padding: ${PADDING_MAP.placeholder};
`;
