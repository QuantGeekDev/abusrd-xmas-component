import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*, ::before, ::after {
  box-sizing: border-box;
}


html {
  line-height: 1.15; 
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}


body {
  padding: 0;
  margin: 0;
}

a {
  background-color: none;
  text-decoration: none;
  color: inherit
}

button {
  border-radius: none;
  box-shadow: none;
  background-color: transparent;
}

img {
  max-width: 100%;
}


h1,
h2,
h3 {
  margin: 0;
}

p {
  margin: 0;
}

ol, ul {
  list-style: none;
  padding-inline-start: 0;
}

textarea {
    white-space: revert;
}

`;

export default GlobalStyles;
