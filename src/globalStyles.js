import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #F5F6FA;
    color: #6E6F73;
    font-family: "Rubik", sans-serif;
  }

  button {
    background-color: #5358B6;
    color: #fff;
    font-weight: 600;
    border: none;
    border-radius: 4px;
    padding: 1rem 1.5rem;
    text-transform: uppercase;
  }
`;

export { GlobalStyle };
