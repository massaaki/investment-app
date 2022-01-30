import Link from 'next/link'
import { useRouter } from 'next/router'

import { NavList } from 'components/combinated/NavList'
import { Logo } from '../../../icons/Logo'

import * as S from './styles'

export const Header = () => {
  const { asPath } = useRouter()

  return (
    <S.Container>
      <S.Content>
        <div>
          <Link href="/">
            <a>
              <Logo asPath={asPath} />
            </a>
          </Link>
        </div>
        <NavList />
      </S.Content>
    </S.Container>
  )
}
