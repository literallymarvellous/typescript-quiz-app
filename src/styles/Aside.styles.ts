import styled from "styled-components";

export const Sidebar = styled.aside`
  position: fixed;
  top: 0%;
  left: 0%;
  z-index: 10;
  min-height: 100vh;
  overflow: scroll;
`;

export const Container = styled.div`
  margin-top: 15px;
  margin-left: 20px;
  border: 1px solid black;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  /* height: 100%; */
  min-height: calc(100vh - 30px);
`;
