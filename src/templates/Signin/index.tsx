import { useState } from 'react'
import { useMutation } from '@apollo/client'

import { MUTATION_LOGIN } from 'graphql/mutations/session/login'

import { FormSignin, LoginUserRequest } from 'components/combinated/FormSignin'

import * as S from './styles'

export const SigninTemplate = () => {
  const [isLoading, setIsloading] = useState(false)
  const [login] = useMutation(MUTATION_LOGIN)

  const loginUser = async (data: LoginUserRequest) => {
    setIsloading(true)
    const response = await login({
      variables: {
        email: data.email,
        password: data.password
      }
    })
    setIsloading(false)
    console.log('loginUser..: ', response)
  }

  return (
    <S.Container>
      <S.Content>
        <h1>Login</h1>
        <S.FormControl>
          <FormSignin
            signinCallback={(data) => loginUser(data)}
            isLoading={isLoading}
          />
        </S.FormControl>
      </S.Content>
    </S.Container>
  )
}
