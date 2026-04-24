import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --dark: #1A1A2E;
  }

  * {
    margin: 0;
    padding: 0;
    font-family: ${(props) => props.theme.fonts.poppins};
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: ${(props) => props.theme.colors.primary} ${(props) => props.theme.colors.background};
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.primary};
    border-radius: 4px;

    &:hover {
      background: ${(props) => props.theme.colors.primaryLight};
    }
  }

  body {    
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: ${(props) => props.theme.fonts.poppins};
  }

  hr {
    border: none;
    height: 1px;
    background: linear-gradient(90deg, transparent, ${(props) => props.theme.colors.primary}40, transparent);
    margin: 3rem 0;
  }

  /* Scroll margin helpers */
  #hero, #about, #skills, #projects, #contact {
    scroll-margin-top: 60px;
  }

  @media (max-width: 768px) {
    #hero, #about, #skills, #projects, #contact {
      scroll-margin-top: 50px;
    }
  }

  /* Selection color */
  ::selection {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.background};
  }

  ::-moz-selection {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.background};
  }
`;
