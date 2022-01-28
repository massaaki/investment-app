import { gql, QueryHookOptions, useQuery } from '@apollo/client';



export const QUERY_USERS = gql`
  query {
    sayHello
  }
`


/**
 * 
 * {
  "data": {
    "sayHello": "hello world!"
  }
}
 */

interface UserData {
  sayHello: string;
}


export function useQueryUsers(options?: QueryHookOptions<any>) {
  return useQuery<UserData>(QUERY_USERS, options);
}