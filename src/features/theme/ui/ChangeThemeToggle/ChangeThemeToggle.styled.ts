import styled from "styled-components";

import { COLORS } from "@/shared/constants/colors";
import {
  CURSOR_POINTER,
  DISPLAY_MAP,
  FLEX_PROPERTIES,
  NO_OPACITY,
  POSITION_MAP,
} from "@/shared/constants/generalStyles";
import { GAP_MAP } from "@/shared/constants/sizing";
import {
  TOGGLE_INPUT_TRANSFORM,
  TOGGLE_SIZING,
  TOGGLE_TRANSFORM,
  TOGGLE_TRANSITION,
} from "@/shared/constants/toggleStyles";

export const Wrapper = styled.div`
  cursor: ${CURSOR_POINTER};
  display: ${DISPLAY_MAP.flex};
  align-items: ${FLEX_PROPERTIES.alignCenter};
  gap: ${GAP_MAP.regular};
`;

export const Switch = styled.div`
  position: ${POSITION_MAP.relative};
  width: ${TOGGLE_SIZING.width};
  height: ${TOGGLE_SIZING.height};
  background: ${COLORS.secondary};
  border-radius: ${TOGGLE_SIZING.radius};
  padding: ${TOGGLE_SIZING.padding};
  transition: ${TOGGLE_TRANSITION};

  &:hover {
    background: ${COLORS.secondaryHover};
  }

  &:before {
    transition: ${TOGGLE_TRANSITION};
    content: "";
    position: ${POSITION_MAP.absolute};
    width: ${TOGGLE_SIZING.before.width};
    height: ${TOGGLE_SIZING.before.height};
    border-radius: ${TOGGLE_SIZING.before.radius};
    top: ${TOGGLE_SIZING.before.top};
    left: ${TOGGLE_SIZING.before.left};
    background: ${COLORS.white};
    transform: ${TOGGLE_TRANSFORM};
  }
`;

export const Input = styled.input`
  opacity: ${NO_OPACITY};
  position: ${POSITION_MAP.absolute};

  &:checked + ${Switch} {
    background: ${({ theme: { accent } }) => accent};

    &:hover {
      background: ${({ theme: { accentHover } }) => accentHover};
    }

    &:before {
      transform: ${TOGGLE_INPUT_TRANSFORM};
    }
  }
`;
