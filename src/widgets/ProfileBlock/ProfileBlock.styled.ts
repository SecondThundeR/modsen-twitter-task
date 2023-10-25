import styled from "styled-components";

import { COLORS } from "@/shared/constants/colors";
import {
  DISPLAY_MAP,
  FLEX_PROPERTIES,
  IMAGE_PROPERTIES,
  POSITION_MAP,
  PROFILE_IMAGE_TRANSFORM,
} from "@/shared/constants/generalStyles";
import {
  DIMENSIONS_MAP,
  GAP_MAP,
  PADDING_MAP,
} from "@/shared/constants/sizing";

export const MainWrapper = styled.div`
  display: ${DISPLAY_MAP.flex};
  flex-direction: ${FLEX_PROPERTIES.column};
  border-bottom: ${`1px solid ${COLORS.sectionBorder}`};
`;

export const ProfileHeaderImage = styled.img`
  width: ${DIMENSIONS_MAP.full};
  height: ${DIMENSIONS_MAP.profileHeaderImage};
  background-image: url("/profileHeaderPlaceholder.png");
  background-position: ${IMAGE_PROPERTIES.position};
  background-repeat: ${IMAGE_PROPERTIES.repeat};
  background-clip: ${IMAGE_PROPERTIES.clip};
  background-size: ${IMAGE_PROPERTIES.size};
`;

export const PaddingWrapper = styled.div`
  padding: ${PADDING_MAP.profileBlock};
`;

export const ColumnGapWrapper = styled.div`
  display: ${DISPLAY_MAP.flex};
  flex-direction: ${FLEX_PROPERTIES.column};
  gap: ${GAP_MAP.regular};
`;

export const TextGapWrapper = styled.div`
  display: ${DISPLAY_MAP.flex};
  gap: ${GAP_MAP.small};
`;

export const RowGapWrapper = styled.div`
  display: ${DISPLAY_MAP.flex};
  gap: ${GAP_MAP.medium};
`;

export const ProfileInfoHeader = styled.div`
  display: ${DISPLAY_MAP.flex};
  justify-content: ${FLEX_PROPERTIES.justifyBetween};
`;

export const ProfileImageWrapper = styled.div`
  & > img {
    position: ${POSITION_MAP.absolute};
    transform: ${PROFILE_IMAGE_TRANSFORM};
  }
`;
