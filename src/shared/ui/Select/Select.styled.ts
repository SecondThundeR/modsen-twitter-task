import styled from "styled-components";

import {
  BORDER_BOX,
  DISPLAY_MAP,
  FLEX_PROPERTIES,
} from "../../constants/generalStyles";
import {
  DIMENSIONS_MAP,
  FONT_SIZE_MAP,
  GAP_MAP,
  PADDING_MAP,
  RADIUS_MAP,
} from "../../constants/sizing";

export const SelectWrapper = styled.div`
  width: ${DIMENSIONS_MAP.full};
  display: ${DISPLAY_MAP.flex};
  flex-direction: ${FLEX_PROPERTIES.column};
  gap: ${GAP_MAP.regular};
`;

export const ErrorMessage = styled.p`
  font-size: ${FONT_SIZE_MAP.text.small};
  color: ${({ theme: { error } }) => error};
`;

export const Wrapper = styled.select`
  box-sizing: ${BORDER_BOX};
  color: ${({ theme: { color } }) => color};
  background-color: ${({ theme: { body } }) => body};
  font-size: ${FONT_SIZE_MAP.input};
  padding: ${PADDING_MAP.input};
  border: ${({ theme: { color20 } }) => `1px solid ${color20}`};
  border-radius: ${RADIUS_MAP.input};

  &:disabled {
    color: ${({ theme: { color60 } }) => color60};
  }
`;
