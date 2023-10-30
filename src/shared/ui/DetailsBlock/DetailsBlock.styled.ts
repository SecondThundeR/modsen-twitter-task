import styled from "styled-components";

import { DISPLAY_MAP, FLEX_PROPERTIES } from "@/shared/constants/generalStyles";
import { GAP_MAP, PADDING_MAP, RADIUS_MAP } from "@/shared/constants/sizing";

export const Wrapper = styled.div`
  display: ${DISPLAY_MAP.flex};
  flex-direction: ${FLEX_PROPERTIES.column};
  gap: ${GAP_MAP.medium};
  padding: ${PADDING_MAP.sidebarBlock};
  background-color: ${({ theme: { sidebarBlockBody } }) => sidebarBlockBody};
  border-radius: ${RADIUS_MAP.sidebarBlock};
`;
