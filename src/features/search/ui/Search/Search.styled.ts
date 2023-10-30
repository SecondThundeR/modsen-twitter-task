import styled from "styled-components";

import Icon from "@/shared/assets/search.svg?react";
import { COLORS } from "@/shared/constants/colors";
import {
  BORDER_BOX,
  DISPLAY_MAP,
  NONE,
} from "@/shared/constants/generalStyles";
import {
  DIMENSIONS_MAP,
  FONT_SIZE_MAP,
  GAP_MAP,
  PADDING_MAP,
  RADIUS_MAP,
} from "@/shared/constants/sizing";

export const Wrapper = styled.div`
  box-sizing: ${BORDER_BOX};
  padding: ${PADDING_MAP.search};
  border-radius: ${RADIUS_MAP.search};
  background-color: ${({ theme: { sidebarBlockBody } }) => sidebarBlockBody};
  display: ${DISPLAY_MAP.flex};
  gap: ${GAP_MAP.compact};
`;

export const SearchIcon = styled(Icon)`
  fill: ${({ theme: { sidebarBlockText } }) => sidebarBlockText};
`;

export const SearchInput = styled.input`
  border: ${NONE};
  outline: ${NONE};
  box-sizing: ${BORDER_BOX};
  width: ${DIMENSIONS_MAP.full};
  background-color: ${COLORS.transparent};
  color: ${({ theme: { color } }) => color};
  font-size: ${FONT_SIZE_MAP.text.regular};

  &::placeholder {
    color: ${({ theme: { sidebarBlockText } }) => sidebarBlockText};
  }
`;
