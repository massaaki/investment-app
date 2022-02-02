import Router from 'next/router'
import { useMutation } from '@apollo/client'

import { MUTATION_CREATE_USER } from 'graphql/mutations/users/create-user'

import { FormSignup, CreateUserRequest } from 'components/combinated/FormSignup'

import * as S from './styles'
import { useState } from 'react'

export const SignupTemplate = () => {
  const [isLoading, setIsloading] = useState(false)
  const [signUp] = useMutation(MUTATION_CREATE_USER)

  const createUser = async (data: CreateUserRequest) => {
    setIsloading(true)
    const response = await signUp({
      variables: {
        name: data.name,
        email: data.email,
        password: data.password
      }
    })
    setIsloading(false)
    Router.push('/signin')
    console.log('registerUser..: ', response)
  }

  return (
    <S.Container>
      <S.Content>
        <h1>Signup</h1>
        <S.FormControl>
          <FormSignup
            signupCallback={(data) => createUser(data)}
            isLoading={isLoading}
          />
        </S.FormControl>
      </S.Content>
    </S.Container>
  )
}
