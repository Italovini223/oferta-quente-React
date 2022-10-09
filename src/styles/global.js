import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Mukta', sans-serif;
  }

  a:hover, button:hover {
    opacity: 0.5;
  }
`;