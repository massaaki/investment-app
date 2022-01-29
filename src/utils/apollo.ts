import { ApolloClient, HttpLink, InMemoryCache, from } from '@apollo/client'
import { onError } from '@apollo/client/link/error'

// let apolloClient: ApolloClient<NormalizedCacheObject | null>;

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message }) => {
      console.log('GraphQL Error: ', message)
    })
  }
})

const link = from([
  errorLink,
  new HttpLink({ uri: 'http://localhost:3333/graphql' })
])

export function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined', //if true is client, if false is server
    link: link,
    cache: new InMemoryCache()
  })
}
