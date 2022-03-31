import Chart from 'chart.js/auto'
import { useEffect, useRef } from 'react'

import { makeChartConfig } from './chart-config'
import { StocksProtocol } from 'interfaces/stocks-protocol'

import * as S from './styles'

export type SimpleLineChartProps = {
  data: StocksProtocol
}

export const SimpleLineChart = ({ data }: SimpleLineChartProps) => {
  const chartRef = useRef<HTMLCanvasElement>()

  useEffect(() => {
    new Chart(
      chartRef.current.getContext('2d'),
      makeChartConfig({
        label: data.code,
        xLabels: data.history.map(
          (stock) =>
            `${
              stock.created_at.getMonth() + 1
            }/${stock.created_at.getFullYear()}`
        ),
        values: data.history.map((stock) => stock.value)
      })
    )
  }, [])

  return (
    <S.Content>
      <canvas ref={chartRef} />
    </S.Content>
  )
}
