import styled from "styled-components";

import {
  BORDER_BOX,
  DISPLAY_MAP,
  FLEX_PROPERTIES,
} from "@/shared/constants/generalStyles";
import { DIMENSIONS_MAP, GAP_MAP } from "@/shared/constants/sizing";

export const Wrapper = styled.form`
  box-sizing: ${BORDER_BOX};
  width: ${DIMENSIONS_MAP.full};
  display: ${DISPLAY_MAP.flex};
  flex-direction: ${FLEX_PROPERTIES.column};
  gap: ${GAP_MAP.large};
`;

export const DateOfBirthWrapper = styled.div`
  width: ${DIMENSIONS_MAP.full};
  display: ${DISPLAY_MAP.grid};
  gap: ${GAP_MAP.large};
  grid-template-rows: 1fr;
  grid-template-columns: 2fr 1fr 1fr;

  @media only screen and (max-width: 768px) {
    grid-template-rows: 3fr;
    grid-template-columns: 1fr;
  }
`;
