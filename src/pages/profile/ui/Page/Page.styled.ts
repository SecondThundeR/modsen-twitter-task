import styled from "styled-components";

import { TEXT_CENTER } from "@/shared/constants/generalStyles";
import { PADDING_MAP } from "@/shared/constants/sizing";

export const PlaceholderWrapper = styled.div`
  padding: ${PADDING_MAP.placeholder};
  text-align: ${TEXT_CENTER};
`;
