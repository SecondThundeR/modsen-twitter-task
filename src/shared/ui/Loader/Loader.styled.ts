import styled, { keyframes } from "styled-components";

import { COLORS } from "../../constants/colors";
import {
  BORDER_BOX,
  DISPLAY_MAP,
  FLEX_PROPERTIES,
  NONE,
} from "../../constants/generalStyles";
import { GAP_MAP, PADDING_MAP } from "../../constants/sizing";
import {
  ANIMATION_DURATION,
  KEYFRAMES,
  SPINNER_SIZING,
} from "../../constants/spinnerStyles";

import type { LoaderWrapperStyleProps, LoaderStyleProps } from "./interfaces";

const spinnerKeyframes = keyframes`
    0% {
      transform: ${KEYFRAMES.from};
    }
    100% {
      transform: ${KEYFRAMES.to};
    }
`;

export const LoaderWrapper = styled.div<LoaderWrapperStyleProps>`
  padding: ${({ $disablePadding }) =>
    $disablePadding ? NONE : PADDING_MAP.placeholder};
  display: ${DISPLAY_MAP.flex};
  align-items: ${FLEX_PROPERTIES.alignCenter};
  justify-content: ${FLEX_PROPERTIES.justifyCenter};
  gap: ${GAP_MAP.large};
`;

export const Spinner = styled.div<LoaderStyleProps>`
  width: ${({ $inline }) => SPINNER_SIZING[$inline ? "widthInline" : "width"]};
  height: ${({ $inline }) =>
    SPINNER_SIZING[$inline ? "heightInline" : "height"]};
  border: ${({ theme, $inline }) =>
    `${SPINNER_SIZING[$inline ? "borderInline" : "border"]} solid ${
      theme.color
    }`};
  border-bottom-color: ${COLORS.transparent};
  border-radius: ${SPINNER_SIZING.radius};
  display: ${DISPLAY_MAP.inlineBlock};
  box-sizing: ${BORDER_BOX};
  animation-name: ${spinnerKeyframes};
  animation-duration: ${ANIMATION_DURATION.duration};
  animation-iteration-count: ${ANIMATION_DURATION.iteration};
  animation-timing-function: ${ANIMATION_DURATION.timing};
`;
