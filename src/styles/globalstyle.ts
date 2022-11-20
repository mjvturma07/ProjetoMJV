import {createGlobalStyle} from "styled-components"

export default createGlobalStyle`

    :root {
    --color-text: #1B1D21;
    --color-text-in-primary: #FFFF;
    --color-primary: #F21416;
    --color-secondary: #D0F8CD;
    --color-tertiary:  #B3BAC5;
    --color-border: rgba(255, 255, 255, 0.2);
    --color-success: #7CC39C;
    --color-warning: #FBEA85;
    --color-error: #EA524F;

    //Reduce font-seize for better utilization of REM unit

    font-size: 62.5%;   
    scroll-behavior: smooth;
  }

  @media (min-width: 700px) {

    :root {
      font-size: 62.5%;
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  body,html{
    width: 100vw;
    height: 100%;
  }

  body {
    background-image: white;
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;
    overflow-y: overlay;
  }

  body, input, button, textarea {
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  li{
    list-style: none;
  }

  .flexrow{
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--color-tertiary);
    margin: 1rem;
    border-radius: 1.6rem;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--color-primary);
    border-radius: 1.6rem;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #fff;
  }

  #LoginScreenClosed{
            display: none;
            width: 0;
            height: 0;
  }

`;
