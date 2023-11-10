import styled from "styled-components";

import {
  DISPLAY_MAP,
  POSITION_MAP,
  FLEX_PROPERTIES,
  TOP_INDEX,
  NONE,
} from "@/shared/constants/generalStyles";
import {
  DIMENSIONS_MAP,
  GAP_MAP,
  PADDING_MAP,
  RADIUS_MAP,
} from "@/shared/constants/sizing";

export const Wrapper = styled.div`
  position: ${POSITION_MAP.fixed};
  top: 0;
  left: 0;
  width: ${DIMENSIONS_MAP.full};
  height: ${DIMENSIONS_MAP.full};
  background-color: ${({ theme }) => theme.bodyModal};
  display: ${DISPLAY_MAP.flex};
  justify-content: ${FLEX_PROPERTIES.justifyCenter};
  align-items: ${FLEX_PROPERTIES.alignCenter};
  z-index: ${TOP_INDEX};
`;

export const ContentWrapper = styled.div`
  width: ${DIMENSIONS_MAP.half};
  min-height: ${DIMENSIONS_MAP.fit};
  max-height: ${DIMENSIONS_MAP.modalMaxHeight};
  background-color: ${({ theme }) => theme.body};
  display: ${DISPLAY_MAP.flex};
  flex-direction: ${FLEX_PROPERTIES.column};
  padding: ${PADDING_MAP.modal};
  overflow-y: auto;
  gap: ${GAP_MAP.medium};
  border-radius: ${RADIUS_MAP.modal};
  align-items: ${FLEX_PROPERTIES.alignCenter};

  @media only screen and (max-width: 768px) {
    margin: ${PADDING_MAP.modal};
    padding: ${NONE};
    width: ${DIMENSIONS_MAP.full};
  }
`;
