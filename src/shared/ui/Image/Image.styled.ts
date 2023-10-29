import styled from "styled-components";

import {
  BORDER_BOX,
  DISPLAY_MAP,
  FLEX_PROPERTIES,
} from "@/shared/constants/generalStyles";
import { DIMENSIONS_MAP, GAP_MAP, RADIUS_MAP } from "@/shared/constants/sizing";

export const Wrapper = styled.div`
  width: ${DIMENSIONS_MAP.full};
  box-sizing: ${BORDER_BOX};
  display: ${DISPLAY_MAP.flex};
  flex-direction: ${FLEX_PROPERTIES.column};
  gap: ${GAP_MAP.regular};
`;

export const Image = styled.img`
  width: ${DIMENSIONS_MAP.full};
  box-sizing: ${BORDER_BOX};
  border-radius: ${RADIUS_MAP.image};
`;
