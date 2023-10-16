import styled from "styled-components";

export const Wrapper = styled.form`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const DateOfBirthWrapper = styled.div`
  width: 100%;
  display: grid;
  gap: 24px;
  grid-template-rows: 1fr;
  grid-template-columns: 2fr 1fr 1fr;
`;
