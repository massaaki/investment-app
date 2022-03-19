import Link from 'next/link'

import { Button } from 'components/single/Button'

import * as S from './styles'

export const Home = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Hero>
          <h1>A data driven Investment platform</h1>
          <div>
            <Link href="/dashboard" passHref>
              <Button as="a" size="large">
                Go to dashboard
              </Button>
            </Link>
          </div>
        </S.Hero>
      </S.Content>
    </S.Container>
  )
}
