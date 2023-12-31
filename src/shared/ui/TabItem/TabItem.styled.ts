import styled from "styled-components";

import { COLORS } from "@/shared/constants/colors";
import { TEXT_CENTER } from "@/shared/constants/generalStyles";
import { DIMENSIONS_MAP, PADDING_MAP } from "@/shared/constants/sizing";

export const Wrapper = styled.div`
  width: ${DIMENSIONS_MAP.full};
  padding: ${PADDING_MAP.tab};
  text-align: ${TEXT_CENTER};
  border-bottom: ${`1px solid ${COLORS.sectionBorder}`};
`;
