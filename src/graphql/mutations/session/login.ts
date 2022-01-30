import { gql } from '@apollo/client'

export const MUTATION_LOGIN = gql`
  mutation MutationLogin($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      token
      refreshToken
    }
  }
`
