import { primaryClr, secondaryClr } from "./App.styles";
import styled from "styled-components";

export const Heading = styled.header`
  position: fixed;
  width: 100vw;
`;

export const Nav = styled.nav`
  margin-top: 15px;
  margin-inline: 20px;
  border: 1px solid black;
  height: 100px;
  display: flex;
  padding-left: 50px;
  align-items: center;
  justify-content: space-between;
`;
