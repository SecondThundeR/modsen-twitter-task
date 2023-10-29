import styled from "styled-components";

import { DISPLAY_MAP, FLEX_PROPERTIES } from "@/shared/constants/generalStyles";
import { DIMENSIONS_MAP, GAP_MAP, MARGIN_MAP } from "@/shared/constants/sizing";

export const Wrapper = styled.div`
  max-width: ${DIMENSIONS_MAP.narrowSignupBlock};
  display: ${DISPLAY_MAP.flex};
  gap: ${GAP_MAP.extraLarge};
  flex-direction: ${FLEX_PROPERTIES.column};
  justify-content: ${FLEX_PROPERTIES.justifyCenter};
  align-items: ${FLEX_PROPERTIES.alignCenter};
  margin: ${MARGIN_MAP.registerWrapper.regular};

  @media only screen and (max-width: 768px) {
    margin: ${MARGIN_MAP.registerWrapper.phone};
  }
`;
