import styled, { createGlobalStyle, css } from "styled-components";

export const bgClr = `hsl(300,2%,91%)`;
export const primaryClr = `#969696`;
export const secondaryClr = `hsl(300,0%,27%)`;

export const GlobalStyle = createGlobalStyle`

  body {
    background-color: ${bgClr};
    overflow: scroll;
  }

  ul {
    display: flex;
    padding-left: 5rem;
    color: black;
  }

  li {
    list-style: none;
    margin-inline: 2rem;

  }

  a {
    color: inherit;
    text-decoration: none;
    font-weight: 600;
    cursor: pointer;
  }
`;

export const Wrapper = styled.main`
  text-align: center;
  display: grid;
  height: 100vh;
  grid-template-rows: 115px auto;
  grid-template-columns: 120px auto;
  width: 100vw;
`;

export const Container = styled.div`
  grid-area: 2 / 2 / 3 / 3;
`;
