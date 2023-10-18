import styled from "styled-components";

import { COLORS } from "@/shared/constants/colors";
import {
  BORDER_BOX,
  DISPLAY_MAP,
  FLEX_PROPERTIES,
} from "@/shared/constants/generalStyles";
import {
  DIMENSIONS_MAP,
  FONT_SIZE_MAP,
  GAP_MAP,
  PADDING_MAP,
  RADIUS_MAP,
} from "@/shared/constants/sizing";

export const ErrorWrapper = styled.div`
  width: ${DIMENSIONS_MAP.full};
  display: ${DISPLAY_MAP.flex};
  flex-direction: ${FLEX_PROPERTIES.column};
  gap: ${GAP_MAP.regular};
`;

export const ErrorMessage = styled.p`
  font-size: ${FONT_SIZE_MAP.text.small};
  color: ${COLORS.error};
`;

export const Wrapper = styled.select`
  box-sizing: ${BORDER_BOX};
  background-color: ${COLORS.white};
  font-size: ${FONT_SIZE_MAP.input};
  padding: ${PADDING_MAP.input};
  border: ${`1px solid ${COLORS.black20}`};
  border-radius: ${RADIUS_MAP.input};

  &:disabled {
    color: ${COLORS.black60};
  }
`;
