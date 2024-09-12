import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --dark: #313131;
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

  body {    
    background-color: ${(props) => props.theme.colors.background};
    margin: 0;
    padding: 0;
    
    
  }

  /* #skills, #portfolio, #contact {scroll-margin-top: 8vh; /* Compensar o header fixo} */
`;
