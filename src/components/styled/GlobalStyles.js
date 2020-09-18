import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
  ${reset}

  *,
  ::before,
  ::after {
    box-sizing: border-box;
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

  body {
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
  }
`;