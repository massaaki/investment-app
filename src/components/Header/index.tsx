
import { NavList } from 'components/NavList'
import { Logo } from '../../icons/Logo'

import * as S from './styles'

export const Header = () => {
  return (
    <S.Container>
      <S.Content>
        <div>
          <Logo />
        </div>
        <NavList />
      </S.Content>
    </S.Container>
  )
}