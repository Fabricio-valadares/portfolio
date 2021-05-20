import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  #root {
    --color-primary: #171734;
    --color-secondary: #476fdf;
    --color-secondary-end: #242448;
    --color-text: #fff;
    --color-yellow: #f8b93c;
    --color-blue-etc: #637efb;
    --color-blue-clear: #40c5dc;
    --color-grey: #ced4de;
  }

  body {
    font-family: 'Roboto', sans-serif; 
    color: #fff;
    background-image: linear-gradient(#181818, #23222f);
    -webkit-font-smoothing: antialiased;
  }

  ::-webkit-scrollbar-track {
    background-image: linear-gradient(#181818, #23222f);
  }
  ::-webkit-scrollbar {
      width: 8px;
      background: #fff;
  }
  ::-webkit-scrollbar-thumb {
      background: #47b7ca;
      border-radius: 5px;
  }

`;
