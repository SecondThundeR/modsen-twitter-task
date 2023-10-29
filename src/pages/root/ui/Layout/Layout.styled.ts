import styled from "styled-components";

import {
  DISPLAY_MAP,
  FLEX_PROPERTIES,
  IMAGE_PROPERTIES,
} from "@/shared/constants/generalStyles";
import {
  DIMENSIONS_MAP,
  GAP_MAP,
  MARGIN_MAP,
  PADDING_MAP,
} from "@/shared/constants/sizing";

import type { RootImageProps } from "./interfaces";

export const Root = styled.div`
  height: ${DIMENSIONS_MAP.fullScreen};
  display: ${DISPLAY_MAP.grid};
  grid-template-rows: 1fr auto;
`;

export const Wrapper = styled.div`
  display: ${DISPLAY_MAP.grid};
  grid-template-columns: 1fr auto;
  height: ${DIMENSIONS_MAP.full};
`;

export const RootImage = styled.div<RootImageProps>`
  background-image: url(${({ $src }) => $src});
  background-position: ${IMAGE_PROPERTIES.position};
  background-repeat: ${IMAGE_PROPERTIES.repeat};
  background-clip: ${IMAGE_PROPERTIES.clip};
  background-size: ${IMAGE_PROPERTIES.size};

  @media only screen and (max-width: 768px) {
    display: ${DISPLAY_MAP.none};
  }
`;

export const ContentWrapper = styled.div`
  display: ${DISPLAY_MAP.flex};
  flex-direction: ${FLEX_PROPERTIES.column};
  justify-content: ${FLEX_PROPERTIES.justifyCenter};
  padding: ${PADDING_MAP.contentWrapper.regular};
  gap: ${GAP_MAP.large};

  @media only screen and (max-width: 768px) {
    padding: ${PADDING_MAP.contentWrapper.phone};
  }
`;

export const Footer = styled.footer`
  padding: ${PADDING_MAP.footer};
  margin: ${MARGIN_MAP.footer};
  display: ${DISPLAY_MAP.flex};
  justify-content: ${FLEX_PROPERTIES.justifyCenter};
  align-items: ${FLEX_PROPERTIES.alignCenter};
  gap: ${GAP_MAP.semiLarge};
  flex-wrap: ${FLEX_PROPERTIES.wrap};
`;
