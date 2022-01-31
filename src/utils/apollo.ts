import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { parseCookies } from 'nookies'

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_DB_URL
})

const authLink = setContext((_, { headers }) => {
  //restore cookies
  const { 'bullbeardev.token': token } = parseCookies()
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

export class SingletonApolloClient {
  private static instance: ApolloClient<any> = null

  public static getInstance(): ApolloClient<any> {
    if (SingletonApolloClient.instance === null) {
      SingletonApolloClient.instance = new ApolloClient({
        ssrMode: typeof window === 'undefined', //if true is client, if false is server
        link: authLink.concat(httpLink),
        cache: new InMemoryCache()
      })
    }

    return SingletonApolloClient.instance
  }

  public static renewAuthorization() {
    if (SingletonApolloClient.instance.link) {
      SingletonApolloClient.instance = new ApolloClient({
        ssrMode: typeof window === 'undefined', //if true is client, if false is server
        link: authLink.concat(httpLink),
        cache: new InMemoryCache()
      })
    }
  }
}
