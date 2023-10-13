import styled from "styled-components";
import { COLORS } from "@/shared/constants/colors";

export const Wrapper = styled.button`
  cursor: pointer;
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  padding: 18px 80px;
  border-radius: 42px;
  border: 1px solid #e4eaed;
  background-color: transparent;
  transition: 0.2s;

  &:hover {
    background-color: ${COLORS.accent};
    color: ${COLORS.white};
  }

  &:active {
    transform: scale(0.98);
  }
`;
