import styled from "styled-components";

import { COLORS } from "@/shared/constants/colors";
import {
  ACTIVE_SCALE,
  CURSOR_POINTER,
  CURSOR_REGULAR,
  DISPLAY_MAP,
  FLEX_PROPERTIES,
  INACTIVE_OPACITY,
  TEXT_CENTER,
  TRANSITION_TIME,
} from "@/shared/constants/generalStyles";
import {
  DIMENSIONS_MAP,
  FONT_SIZE_MAP,
  GAP_MAP,
  PADDING_MAP,
  RADIUS_MAP,
} from "@/shared/constants/sizing";
import { WEIGHTS_MAP } from "@/shared/constants/weights";
import {
  getBackgroundColor,
  getTextColor,
  getBorder,
  getHoverBackgroundColor,
} from "@/shared/helpers/buttonStyles";
import { getFontFamily } from "@/shared/helpers/generalStyles";

import { ButtonStyleProps } from "./interfaces";

export const Wrapper = styled.button<ButtonStyleProps>`
  cursor: ${CURSOR_POINTER};
  width: ${DIMENSIONS_MAP.full};
  height: ${DIMENSIONS_MAP.fit};
  display: ${DISPLAY_MAP.flex};
  justify-content: ${FLEX_PROPERTIES.justifyCenter};
  align-items: ${FLEX_PROPERTIES.alignCenter};
  gap: ${GAP_MAP.regular};
  font-family: ${({ $font }) => getFontFamily($font)};
  background-color: ${({ $variant }) => getBackgroundColor($variant)};
  color: ${({ $variant }) => getTextColor($variant)};
  font-size: ${FONT_SIZE_MAP.button};
  font-weight: ${WEIGHTS_MAP.medium};
  text-align: ${TEXT_CENTER};
  padding: ${PADDING_MAP.button.regular};
  border-radius: ${RADIUS_MAP.button};
  border: ${({ $variant }) => getBorder($variant)};
  transition: ${TRANSITION_TIME};

  @media only screen and (max-width: 768px) {
    padding: ${PADDING_MAP.button.phone};
  }

  &:hover {
    background-color: ${({ $variant }) => getHoverBackgroundColor($variant)};
    color: ${COLORS.white};
    border-color: ${COLORS.transparent};
  }

  &:active {
    transform: ${`scale(${ACTIVE_SCALE})`};
  }

  &:disabled {
    opacity: ${INACTIVE_OPACITY};
    cursor: ${CURSOR_REGULAR};
  }
`;
