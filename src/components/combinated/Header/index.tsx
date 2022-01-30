import Link from 'next/link'

import { NavList } from 'components/combinated/NavList'
import { Logo } from '../../../icons/Logo'

import * as S from './styles'

export const Header = () => {
  return (
    <S.Container>
      <S.Content>
        <div>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </div>
        <NavList />
      </S.Content>
    </S.Container>
  )
}
