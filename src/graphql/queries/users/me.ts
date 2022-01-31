import { gql, QueryHookOptions, useQuery } from '@apollo/client'

export const QUERY_ME = gql`
  query {
    me {
      error {
        type
      }
      result {
        id
        name
        email
      }
    }
  }
`

type Response = {
  error?: {
    type: string
  }
  result?: {
    message?: string
  }
}

interface UserData {
  me: Response
}

export function useQueryMe(options?: QueryHookOptions) {
  return useQuery<UserData>(QUERY_ME, options)
}
