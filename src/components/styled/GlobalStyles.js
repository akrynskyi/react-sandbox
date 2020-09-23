import { createGlobalStyle, css } from 'styled-components';

const reset = css`
  *,
  *::before,
  *::after {
    margin: 0;
    border: 0;
    padding: 0;
    font: inherit;
    font-size: 100%;
    box-sizing: border-box;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  iframe {
    border: 0;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, 
  blockquote:after,
  q::before, 
  q::after {
    content: '';
    content: none;
  }

  textarea {
    resize: none;
    overflow: auto;
    vertical-align: top;
    box-shadow: none;
  }

  input,
  textarea,
  select,
  button {
    outline: none;
    border: none;
    font-family: inherit;
    padding: 0;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

export const GlobalStyles = createGlobalStyle`
  ${reset}

  body {
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
  }
`;