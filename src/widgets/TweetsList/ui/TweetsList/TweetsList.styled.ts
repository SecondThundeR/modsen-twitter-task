import styled from "styled-components";

import { DISPLAY_MAP, FLEX_PROPERTIES } from "@/shared/constants/generalStyles";
import { GAP_MAP, PADDING_MAP } from "@/shared/constants/sizing";

export const PlaceholderWrapper = styled.div`
  display: ${DISPLAY_MAP.flex};
  flex-direction: ${FLEX_PROPERTIES.column};
  align-items: ${FLEX_PROPERTIES.alignCenter};
  justify-content: ${FLEX_PROPERTIES.justifyCenter};
  gap: ${GAP_MAP.medium};
  padding-top: ${PADDING_MAP.placeholder};
`;

export const Wrapper = styled.div`
  display: ${DISPLAY_MAP.flex};
  flex-direction: ${FLEX_PROPERTIES.column};
`;
