import styled from "styled-components";

import {
  DISPLAY_MAP,
  FLEX_PROPERTIES,
  TEXT_CENTER,
} from "@/shared/constants/generalStyles";
import { DIMENSIONS_MAP, GAP_MAP, MARGIN_MAP } from "@/shared/constants/sizing";

export const Wrapper = styled.div`
  margin: ${MARGIN_MAP.errorBoundary};
  width: ${DIMENSIONS_MAP.fit};
  display: ${DISPLAY_MAP.flex};
  align-items: ${FLEX_PROPERTIES.alignCenter};
  justify-content: ${FLEX_PROPERTIES.justifyCenter};
  flex-direction: ${FLEX_PROPERTIES.column};
  gap: ${GAP_MAP.medium};
  text-align: ${TEXT_CENTER};
`;
