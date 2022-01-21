import Link from 'next/link';

import * as S from './styles';

export const Home = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Hero>
          <h1>A data driven Investment platform</h1>
          <div>
            <Link href="/">
              <a>
                Getting started
              </a>
            </Link>
          </div>
        </S.Hero>
      </S.Content>
    </S.Container>
  )
}