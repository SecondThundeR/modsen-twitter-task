import styled from "styled-components";

import {
  DISPLAY_MAP,
  FLEX_PROPERTIES,
  IMAGE_PROPERTIES,
  NO_OVERFLOW,
} from "@/shared/constants/generalStyles";
import { DIMENSIONS_MAP, GAP_MAP, RADIUS_MAP } from "@/shared/constants/sizing";

import type { ImageDivProps } from "./interfaces";

export const Grid = styled.div`
  width: ${DIMENSIONS_MAP.full};
  display: ${DISPLAY_MAP.flex};
  flex-direction: ${FLEX_PROPERTIES.column};
  gap: ${GAP_MAP.small};
  border-radius: ${RADIUS_MAP.image};
  overflow: ${NO_OVERFLOW};
`;

export const Row = styled.div`
  display: ${DISPLAY_MAP.flex};
  gap: ${GAP_MAP.small};
  flex: 1;
`;

export const Image = styled.div<ImageDivProps>`
  height: ${DIMENSIONS_MAP.sidebarImage};
  background-image: ${({ $src }) => `url(${$src})`};
  background-position: ${IMAGE_PROPERTIES.position};
  background-repeat: ${IMAGE_PROPERTIES.repeat};
  background-clip: ${IMAGE_PROPERTIES.clip};
  background-size: ${IMAGE_PROPERTIES.size};
  flex: 1;
`;
