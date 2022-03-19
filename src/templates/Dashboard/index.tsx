import { BarChart } from 'components/single/BarChart'
import { StocksProtocol } from 'interfaces/stocks-protocol'
import { DashboardPageProps } from 'pages/dashboard'
import { useEffect, useState } from 'react'

import * as S from './styles'

export const DashboardTemplate = ({
  stockIndexHistory
}: DashboardPageProps) => {
  const [data, setData] = useState<StocksProtocol>(null)

  useEffect(() => {
    console.log(stockIndexHistory)
    if (stockIndexHistory) {
      setData({
        code: stockIndexHistory.code,
        history: stockIndexHistory.history.map((stock) => ({
          value: stock.value,
          max: stock.max,
          min: stock.min,
          created_at: new Date(stock.created_at)
        }))
      })
    }
  }, [stockIndexHistory])

  if (data) {
    return (
      <S.Container>
        <S.Content>
          <h1>Dashboard</h1>
          <BarChart data={data} />
        </S.Content>
      </S.Container>
    )
  }
  return <></>
}
