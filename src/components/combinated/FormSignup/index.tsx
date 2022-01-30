import { FormEvent, useState } from 'react'

import { TextField } from 'components/single/TextField'

import * as S from './styles'
import { Button } from 'components/single/Button'

export type CreateUserRequest = {
  name: string
  email: string
  password: string
}

export type FormSignupProps = {
  signupCallback?: (data: CreateUserRequest) => Promise<void>
  isLoading?: boolean
}

export const FormSignup = ({
  signupCallback,
  isLoading = false
}: FormSignupProps) => {
  const [values, setValues] = useState<CreateUserRequest>({
    name: '',
    email: '',
    password: ''
  })

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (signupCallback) {
      await signupCallback({
        name: values.name,
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
          name="name"
          placeholder="name"
          type="text"
          onInputChange={(v) => onInputChange('name', v)}
        />
        <TextField
          name="email"
          placeholder="email"
          type="text"
          onInputChange={(v) => onInputChange('email', v)}
        />
        <TextField
          name="password"
          placeholder="password"
          type="text"
          onInputChange={(v) => onInputChange('password', v)}
        />
        <Button as="button" type="submit" fullWidth>
          Register
        </Button>
      </form>
    </S.Wrapper>
  )
}
