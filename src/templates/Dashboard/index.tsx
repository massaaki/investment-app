import { DashboardPageProps } from 'pages/dashboard'

import * as S from './styles'

export const DashboardTemplate = ({
  stockIndexHistory
}: DashboardPageProps) => {
  console.log('stockIndexHistory..:', stockIndexHistory)
  return (
    <S.Container>
      <S.Content>
        <h1>Dashboard</h1>
        <p>hello dash!</p>
      </S.Content>
    </S.Container>
  )
}
