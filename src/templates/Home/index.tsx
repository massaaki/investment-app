import { Button } from 'components/single/Button'
// import { useQueryUsers } from 'graphql/queries/users/load-users'
import Link from 'next/link'
// import { useEffect } from 'react'

import * as S from './styles'

export const Home = () => {
  // const { data } = useQueryUsers()

  // useEffect(() => {
  //   if (data) {
  //     console.log(data.sayHello)
  //   }
  // }, [data])

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
