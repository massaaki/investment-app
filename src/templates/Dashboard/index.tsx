import { SimpleLineChart } from 'components/single/SimpleLineChart'
import { StocksProtocol } from 'interfaces/stocks-protocol'
import { DashboardPageProps } from 'pages/dashboard'
import { useEffect, useState } from 'react'

import * as S from './styles'

export const DashboardTemplate = ({
  stockIndexHistory
}: DashboardPageProps) => {
  const [data, setData] = useState<StocksProtocol>(null)
  const [minVal, setMinVal] = useState<number>(0)
  const [maxVal, setMaxVal] = useState<number>(0)

  useEffect(() => {
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

      let min = 99999999
      let max = 0

      stockIndexHistory.history.forEach((stock) => {
        if (stock.value < min) {
          min = stock.value
        }
        if (stock.value > max) {
          max = stock.value
        }
      })

      setMinVal(min)
      setMaxVal(max)
    }
  }, [stockIndexHistory])

  if (data && data.history.length > 0) {
    return (
      <S.Container>
        <S.Content>
          <S.Header>
            <ul>
              <li>
                <h2>BOV11.SA</h2>
                <div>120.474</div>
              </li>
            </ul>
          </S.Header>

          <S.Wrapper>
            <SimpleLineChart data={data} />
            <S.Info>
              <li>
                <h2>Current value</h2>
                <div>
                  {new Intl.NumberFormat('pt-br', {
                    style: 'decimal'
                  }).format(data.history[0].value)}
                </div>
              </li>
              <li>
                <h2>Min</h2>
                <div>
                  {new Intl.NumberFormat('pt-br', {
                    style: 'decimal'
                  }).format(minVal)}
                </div>
              </li>
              <li>
                <h2>Max</h2>
                <div>
                  {new Intl.NumberFormat('pt-br', {
                    style: 'decimal'
                  }).format(maxVal)}
                </div>
              </li>
            </S.Info>
          </S.Wrapper>
        </S.Content>
      </S.Container>
    )
  }
  return <></>
}
