import styled from "styled-components";
import { RootImageProps } from "./interfaces";

export const Root = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  height: 100%;
`;

export const RootImage = styled.div<RootImageProps>`
  background-image: url(${({ $src }) => $src});
  background-position: center;
  background-repeat: no-repeat;
  background-clip: border-box;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 36px;
  padding-right: 96px;
  gap: 24px;

  @media only screen and (max-width: 768px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const Footer = styled.footer`
  padding: 18px 0px;
  margin: 0px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
`;
