import styled from "styled-components";

import { DISPLAY_MAP, FLEX_PROPERTIES } from "@/shared/constants/generalStyles";
import { GAP_MAP, MARGIN_MAP } from "@/shared/constants/sizing";

export const Wrapper = styled.nav`
  display: ${DISPLAY_MAP.flex};
  flex-direction: ${FLEX_PROPERTIES.column};
  gap: ${GAP_MAP.extraLarge};
  margin: ${MARGIN_MAP.navigation};
`;
