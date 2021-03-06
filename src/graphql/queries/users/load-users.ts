import { gql, QueryHookOptions, useQuery } from '@apollo/client'

export const QUERY_USERS = gql`
  query {
    sayHello {
      error {
        type
      }
      result {
        message
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
  sayHello: Response
}

export function useQueryUsers(options?: QueryHookOptions) {
  return useQuery<UserData>(QUERY_USERS, options)
}
