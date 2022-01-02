import styled, { createGlobalStyle, css } from "styled-components";

export const bgClr = `hsl(300,2%,91%)`;
export const primaryClr = `#969696`;
export const secondaryClr = `hsl(300,0%,27%)`;

export const GlobalStyle = createGlobalStyle`

  body {
    background-color: ${bgClr};
    overflow: scroll;
    font-family: 'Roboto', sans-serif;
    user-select: none;
    font-display: swap;
  }


  :focus {
    outline-color: ${secondaryClr};
  }

  ul {
    display: flex;
    align-items: center;
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

  input[type="radio"] {
    appearance: none;
    margin: 0;
    font: inherit;
    color: black;
    border: 1px solid black;
    height: 2.4em;
    width: 2.4em;
    border-radius: 50%;
    display: grid;
    place-items: center;
    flex: none;

    @media screen and (max-width: 768px) {
      height: 1.5em;
      width: 1.5em;
    }

    &::before {
      content: "";
      width: 1.4em;
      height: 1.4em;
      border-radius: 50%;
      transform: scale(0);
      transform-origin: bottom;
      transition: 350ms transform ease-in-out;
      box-shadow: inset 1em 1em black;

      @media screen and (max-width: 768px) {
      height: 1em;
      width: 1em;
    }
    }

    &:checked::before {
      transform: scale(1)
    }

    &:focus {
      outline-color: ${secondaryClr};
    }
  }
`;

export const Wrapper = styled.main`
  z-index: 1;
  text-align: center;
  display: grid;
  min-height: 100vh;
  grid-template-rows: 115px auto;
  grid-template-columns: 120px auto;
  width: 100vw;
`;

export const Container = styled.div`
  grid-area: 2 / 2 / 3 / 3;
`;
