import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root, body {
    width: 100%;

    margin: 0;
    padding: 0;

    font-size: 8px;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.43;
  }

  *, ::before, ::after {
    box-sizing: border-box;
  }

  a,
  a:hover,
  a:visited {
    text-decoration: none;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  code,
  kbd {
    font-family: "SF Mono", "Segoe UI Mono", "Roboto Mono", "Ubuntu Mono", Menlo, Courier, monospace;
  }

  template {
    display: none;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section {
    display: block;
  }

  html,
  body,
  p,
  div,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  ol,
  dl,
  img,
  pre,
  form,
  fieldset {
    margin: 0;
    padding: 0;
  }

  img,
  fieldset {
    border: 0;
  }

  #__next {
    width: 100%;
  }
`;

export default GlobalStyles;
