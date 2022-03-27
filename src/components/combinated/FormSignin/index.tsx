import { FormEvent, useState } from 'react'

import { TextField } from 'components/single/TextField'

import * as S from './styles'
import { Button } from 'components/single/Button'

export type LoginUserRequest = {
  email: string
  password: string
}

export type FormSigninProps = {
  signinCallback?: (data: LoginUserRequest) => Promise<void>
  isLoading?: boolean
}

export const FormSignin = ({
  signinCallback,
  isLoading = false
}: FormSigninProps) => {
  const [values, setValues] = useState<LoginUserRequest>({
    email: '',
    password: ''
  })

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (signinCallback) {
      await signinCallback({
        email: values.email,
        password: values.password
      })
    }
  }

  function onInputChange(field: string, value: string) {
    setValues((s) => ({ ...s, [field]: value }))
  }
  if (isLoading)
    return (
      <S.WrapperLoading>
        <S.Loading src="/images/dots.svg" alt="" />
      </S.WrapperLoading>
    )

  return (
    <S.Wrapper>
      <form onSubmit={onSubmit}>
        <TextField
          name="email"
          placeholder="email"
          type="text"
          onInputChange={(v) => onInputChange('email', v)}
        />
        <TextField
          name="password"
          placeholder="password"
          type="password"
          onInputChange={(v) => onInputChange('password', v)}
        />
        <Button as="button" type="submit" fullWidth>
          Login
        </Button>
      </form>
    </S.Wrapper>
  )
}
