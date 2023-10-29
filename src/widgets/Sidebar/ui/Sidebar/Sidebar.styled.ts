import styled from "styled-components";
import { DISPLAY_MAP, FLEX_PROPERTIES } from "@/shared/constants/generalStyles";
import { GAP_MAP, MARGIN_MAP } from "@/shared/constants/sizing";

export const Wrapper = styled.div`
  display: ${DISPLAY_MAP.flex};
  flex-direction: ${FLEX_PROPERTIES.column};
  gap: ${GAP_MAP.large};
  margin: ${MARGIN_MAP.sidebar};
`;

export const Footer = styled.div`
  display: ${DISPLAY_MAP.flex};
  justify-content: ${FLEX_PROPERTIES.justifyCenter};
  flex-wrap: ${FLEX_PROPERTIES.wrap};
  gap: ${GAP_MAP.regular};
`;
