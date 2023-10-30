import styled from "styled-components";

import { DISPLAY_MAP, FLEX_PROPERTIES } from "@/shared/constants/generalStyles";
import { GAP_MAP } from "@/shared/constants/sizing";

export const Wrapper = styled.div`
  display: ${DISPLAY_MAP.flex};
  flex-direction: ${FLEX_PROPERTIES.column};
  gap: ${GAP_MAP.compact};
`;

export const InfoWrapper = styled.div`
  display: ${DISPLAY_MAP.flex};
  flex-direction: ${FLEX_PROPERTIES.column};
  gap: ${GAP_MAP.small};
`;

export const HeaderWrapper = styled.div`
  display: ${DISPLAY_MAP.flex};
  justify-content: ${FLEX_PROPERTIES.justifyBetween};
  align-items: ${FLEX_PROPERTIES.alignCenter};
`;
