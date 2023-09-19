import { createGlobalStyle } from "styled-components";

const HomeGlobalStyles = createGlobalStyle`

  *{
    box-sizing: border-box;
  }
  body{
    --personality-color: #99c0ff;
    background: url('/src/assets/pexels-nati-17788284.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
const ReaderGlobalStyles = createGlobalStyle`

  *{
    box-sizing: border-box;
  }
  body{
    --personality-color: #99c0ff;
    background: url('src/assets/pexels-nati-17788284.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export { HomeGlobalStyles, ReaderGlobalStyles};