import styled from "styled-components";

import { COLORS } from "@/shared/constants/colors";
import { BORDER_BOX } from "@/shared/constants/generalStyles";
import {
  DIMENSIONS_MAP,
  FONT_SIZE_MAP,
  PADDING_MAP,
  RADIUS_MAP,
} from "@/shared/constants/sizing";

export const Wrapper = styled.select`
  box-sizing: ${BORDER_BOX};
  width: ${DIMENSIONS_MAP.full};
  background-color: ${COLORS.white};
  font-size: ${FONT_SIZE_MAP.input};
  padding: ${PADDING_MAP.input};
  border: ${`1px solid ${COLORS.black20}`};
  border-radius: ${RADIUS_MAP.input};

  &:disabled {
    color: ${COLORS.black60};
  }
`;
