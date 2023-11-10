import styled from "styled-components";

import { COLORS } from "../../constants/colors";
import {
  DISPLAY_MAP,
  FLEX_PROPERTIES,
  MARGIN_AUTO,
  NONE,
} from "../../constants/generalStyles";
import { DIMENSIONS_MAP } from "../../constants/sizing";

export const Wrapper = styled.div`
  height: ${DIMENSIONS_MAP.full};
  max-width: ${DIMENSIONS_MAP.narrowLayoutBlock};
  display: ${DISPLAY_MAP.grid};
  grid-template-columns: 1fr 2fr 1fr;
  margin: ${MARGIN_AUTO};

  @media only screen and (max-width: 768px) {
    display: ${DISPLAY_MAP.flex};
    flex-direction: ${FLEX_PROPERTIES.column};
  }
`;

export const OutletWrapper = styled.div`
  border-left: ${`1px solid ${COLORS.sectionBorder}`};
  border-right: ${`1px solid ${COLORS.sectionBorder}`};
`;

export const SidebarWrapper = styled.div`
  @media only screen and (max-width: 768px) {
    display: ${NONE};
  }
`;
