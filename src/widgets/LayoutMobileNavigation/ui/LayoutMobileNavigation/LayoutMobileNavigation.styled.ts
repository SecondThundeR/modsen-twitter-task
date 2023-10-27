import styled from "styled-components";

import { COLORS } from "@/shared/constants/colors";
import {
  BORDER_BOX,
  DISPLAY_MAP,
  FLEX_PROPERTIES,
  TOP_INDEX,
} from "@/shared/constants/generalStyles";
import { DIMENSIONS_MAP, PADDING_MAP } from "@/shared/constants/sizing";

export const Wrapper = styled.div`
  width: ${DIMENSIONS_MAP.full};
  height: ${DIMENSIONS_MAP.mobileNavigation};
  background-color: ${({ theme }) => theme.body};
  box-sizing: ${BORDER_BOX};
  border: ${`1px solid ${COLORS.sectionBorder}`};
  padding: ${PADDING_MAP.mobileNavigation};
  display: ${DISPLAY_MAP.none};
  z-index: ${TOP_INDEX};

  @media only screen and (max-width: 768px) {
    display: ${DISPLAY_MAP.flex};
    align-items: ${FLEX_PROPERTIES.alignCenter};
    justify-content: ${FLEX_PROPERTIES.justifyBetween};
  }
`;
