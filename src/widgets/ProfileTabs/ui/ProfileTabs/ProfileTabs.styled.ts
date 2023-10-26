import styled from "styled-components";

import {
  DISPLAY_MAP,
  PROFILE_TABS_GRID_PROPERTIES,
} from "@/shared/constants/generalStyles";

export const Wrapper = styled.div`
  display: ${DISPLAY_MAP.grid};
  grid-template-columns: ${PROFILE_TABS_GRID_PROPERTIES.columns};
  grid-template-rows: ${PROFILE_TABS_GRID_PROPERTIES.rows};
`;
