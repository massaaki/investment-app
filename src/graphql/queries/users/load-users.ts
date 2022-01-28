import { gql, QueryHookOptions, useQuery } from '@apollo/client';

export const QUERY_USERS = gql`
  query {
    sayHello
  }
`
interface UserData {
  sayHello: string;
}

export function useQueryUsers(options?: QueryHookOptions) {
  return useQuery<UserData>(QUERY_USERS, options);
}
