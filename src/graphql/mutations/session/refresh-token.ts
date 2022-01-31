import { gql } from '@apollo/client'

export const MUTATION_REFRESH_TOKEN = gql`
  mutation ($refreshToken: String!) {
    renewRefreshToken(refreshToken: $refreshToken) {
      id
      token
      refreshToken
    }
  }
`
