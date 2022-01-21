import { Header } from 'components/Header';
import { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '../styles/global';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </>
  )
}

export default MyApp
