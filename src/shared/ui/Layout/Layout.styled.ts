import styled from "styled-components";

import { COLORS } from "@/shared/constants/colors";
import { DISPLAY_MAP, MARGIN_AUTO } from "@/shared/constants/generalStyles";
import { DIMENSIONS_MAP } from "@/shared/constants/sizing";

export const Wrapper = styled.div`
  max-width: ${DIMENSIONS_MAP.narrowLayoutBlock};
  display: ${DISPLAY_MAP.grid};
  grid-template-columns: 1fr 3fr 1fr;
  margin: ${MARGIN_AUTO};
`;

export const OutletWrapper = styled.div`
  border-left: ${`1px solid ${COLORS.sectionBorder}`};
  border-right: ${`1px solid ${COLORS.sectionBorder}`};
`;
