import { useState, useContext } from 'react'
import { AuthContext } from 'contexts/AuthContext'

import { FormSignin, LoginUserRequest } from 'components/combinated/FormSignin'

import * as S from './styles'

export const SigninTemplate = () => {
  const [isLoading, setIsloading] = useState(false)
  const { signIn } = useContext(AuthContext)

  const loginUser = async (data: LoginUserRequest) => {
    setIsloading(true)
    await signIn({ email: data.email, password: data.password })
    setIsloading(false)
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
