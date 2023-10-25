import styled from "styled-components";

import { COLORS } from "@/shared/constants/colors";
import { DISPLAY_MAP, FLEX_PROPERTIES } from "@/shared/constants/generalStyles";
import { GAP_MAP, PADDING_MAP } from "@/shared/constants/sizing";

import { TweetLikeButtonWrapperProps } from "./interfaces";

export const Wrapper = styled.div`
  display: ${DISPLAY_MAP.flex};
  gap: ${GAP_MAP.medium};
  padding: ${PADDING_MAP.tweetWrapper};
  border-bottom: ${`1px solid ${COLORS.sectionBorder}`};
`;

export const TweetDetailsWrapper = styled.div`
  display: ${DISPLAY_MAP.flex};
  flex-direction: ${FLEX_PROPERTIES.column};
  gap: ${GAP_MAP.medium};
  flex: 1;
`;

export const InfoWrapper = styled.div`
  display: ${DISPLAY_MAP.flex};
  flex-direction: ${FLEX_PROPERTIES.column};
  gap: ${GAP_MAP.regular};
`;

export const InfoHeaderWrapper = styled.div`
  display: ${DISPLAY_MAP.flex};
  gap: ${GAP_MAP.small};

  & > p:nth-last-child(1)::before {
    content: "· ";
  }
`;

export const LikeButtonWrapper = styled.div<TweetLikeButtonWrapperProps>`
  display: ${DISPLAY_MAP.flex};
  gap: ${GAP_MAP.regular};
  align-items: ${FLEX_PROPERTIES.alignCenter};
  color: ${({ theme, $isLiked }) => ($isLiked ? theme.liked : theme.body)};
`;
