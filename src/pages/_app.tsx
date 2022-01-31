import { Header } from 'components/combinated/Header'
import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'styled-components'

import { AuthProvider } from 'contexts/AuthContext'
import { SingletonApolloClient } from 'utils/apollo'

import { GlobalStyles } from '../styles/global'
import theme from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  const client = SingletonApolloClient.getInstance()

  return (
    <>
      <ApolloProvider client={client}>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <Header />
            <Component {...pageProps} />
            <GlobalStyles />
          </ThemeProvider>
        </AuthProvider>
      </ApolloProvider>
    </>
  )
}

export default MyApp
