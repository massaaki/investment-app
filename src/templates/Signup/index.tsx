import { FormSignup } from 'components/combinated/FormSignup'
import * as S from './styles'

export const Signup = () => {
  return (
    <S.Container>
      <S.Content>
        <h1>Signup</h1>
        <S.FormControl>
          <FormSignup />
        </S.FormControl>
      </S.Content>
    </S.Container>
  )
}
