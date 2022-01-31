import { Button } from 'components/single/Button'
import Link from 'next/link'

import * as S from './styles'

export const Home = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Hero>
          <h1>A data driven Investment platform</h1>
          <div>
            <Link href="/signup" passHref>
              <Button as="a" size="large">
                Getting started
              </Button>
            </Link>
          </div>
        </S.Hero>
      </S.Content>
    </S.Container>
  )
}
