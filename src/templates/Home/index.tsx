import { useContext } from 'react'
import Link from 'next/link'

import { AuthContext } from 'contexts/AuthContext'

import { Button } from 'components/single/Button'

import * as S from './styles'

export const Home = () => {
  const { user } = useContext(AuthContext)
  return (
    <S.Container>
      <S.Content>
        <S.Hero>
          <h1>A data driven Investment platform</h1>
          <div>
            {!user ? (
              <Link href="/signup" passHref>
                <Button as="a" size="large">
                  Getting started
                </Button>
              </Link>
            ) : (
              <Link href="/dashboard" passHref>
                <Button as="a" size="large">
                  Go to dashboard
                </Button>
              </Link>
            )}
          </div>
        </S.Hero>
      </S.Content>
    </S.Container>
  )
}
