import styled from "styled-components";

import { COLORS } from "@/shared/constants/colors";
import { FONT_FAMILY_MAP } from "@/shared/constants/fontFamily";
import {
  CURSOR_POINTER,
  DISPLAY_MAP,
  FLEX_PROPERTIES,
  INACTIVE_OPACITY,
  NONE,
} from "@/shared/constants/generalStyles";
import { FONT_SIZE_MAP, GAP_MAP } from "@/shared/constants/sizing";
import { WEIGHTS_MAP } from "@/shared/constants/weights";

import type { SectionButtonStyleProps } from "./interfaces";

export const Button = styled.button<SectionButtonStyleProps>`
  cursor: ${CURSOR_POINTER};
  background-color: ${COLORS.transparent};
  display: ${DISPLAY_MAP.flex};
  align-items: ${FLEX_PROPERTIES.alignCenter};
  gap: ${GAP_MAP.semiLarge};
  color: ${({ theme: { color } }) => color};
  border: ${NONE};
  outline: ${NONE};
  font-family: ${({ $isActive }) =>
    $isActive ? FONT_FAMILY_MAP.robotoSerif : FONT_FAMILY_MAP.roboto};
  font-size: ${FONT_SIZE_MAP.textButton};
  font-weight: ${({ $isActive }) =>
    $isActive ? WEIGHTS_MAP.bold : WEIGHTS_MAP.semibold};

  & > svg {
    -webkit-filter: ${({ theme: { iconInvert } }) => iconInvert};
    filter: ${({ theme: { iconInvert } }) => iconInvert};
  }

  &:hover {
    opacity: ${INACTIVE_OPACITY};
  }
`;
