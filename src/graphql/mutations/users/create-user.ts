import { gql } from '@apollo/client';

export const MUTATION_CREATE_USER = gql`
  mutation MutationCreateUser($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      id
      email
      name
    }
  }
`