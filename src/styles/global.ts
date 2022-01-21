import { createGlobalStyle, DefaultTheme, GlobalStyleComponent, css } from 'styled-components';


export const GlobalStyles: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: local(''),
        url('/fonts/Monteserrat/Montserrat-Black.ttf');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: local(''),
        url('/fonts/Monteserrat/Montserrat-ExtraBold.ttf');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local(''),
        url('/fonts/Monteserrat/Montserrat-Bold.ttf');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local(''),
        url('/fonts/Monteserrat/Montserrat-SemiBold.ttf');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local(''),
        url('/fonts/Monteserrat/Montserrat-Medium.ttf');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
        url('/fonts/Monteserrat/Montserrat-Regular.ttf');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local(''),
        url('/fonts/Monteserrat/Montserrat-Light.ttf');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 200;
    font-display: swap;
    src: local(''),
        url('/fonts/Monteserrat/Montserrat-Thin.ttf');
  }

  ul {
    list-style: none;
  }
  a {
    text-decoration: none; 
    color: unset;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before, &::after {
      box-sizing: inherit;
    }
  }

  html {
    font-size: 62.5%;
  }

  ${({ theme }) => css`
    body {
      font-family: ${theme.font.family};
      font-weight: ${theme.font.weights.medium};
      font-size: ${theme.font.sizes.medium};
    }
  `}
`;