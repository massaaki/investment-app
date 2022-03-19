import { useRef, useEffect } from 'react'
import * as d3 from 'd3'

import * as S from './styles'

import { StocksProtocol } from 'interfaces/stocks-protocol'

export type BarChartProps = {
  data: StocksProtocol
}

export const BarChart = ({ data }: BarChartProps) => {
  const d3Chart = useRef()
  const dimensions = {
    margin: 200,
    width: window.innerWidth < 800 ? window.innerWidth : 800,
    height: 400
  }

  useEffect(() => {
    const svg = d3.select(d3Chart.current)

    svg
      .append('text')
      .attr('transform', `translate(100,0)`)
      .attr('x', dimensions.width / 2 - 55)
      .attr('y', 80)
      .attr('font-size', '24px')
      .text(data.code)

    const xScale = d3.scaleBand().range([0, dimensions.width]).padding(0.4)

    const yScale = d3.scaleLinear().range([dimensions.height, 0])

    const g = svg.append('g').attr('transform', 'translate(100,100)')

    xScale.domain(
      data.history.map((d) => {
        return (
          String(d.created_at.getMonth() + 1) +
          '/' +
          String(d.created_at.getFullYear())
        )
      })
    )

    const yMax = d3.max(data.history, function (d: any): number {
      return Number(d.value) + 20000
    })

    yScale.domain([0, yMax])

    g.append('g')
      .attr('transform', `translate(0, ${dimensions.height})`)
      .call(d3.axisBottom(xScale))

    g.append('g').call(
      d3
        .axisLeft(yScale)
        .tickFormat(function (d: any) {
          return d
        })
        .ticks(6)
    )

    g.selectAll('.bar')
      .data(data.history)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', function (d: any) {
        console.log(d.created_at)
        const xDescription =
          String(d.created_at.getMonth() + 1) +
          '/' +
          String(d.created_at.getFullYear())
        return xScale(xDescription)
      })
      .attr('y', function (d: any) {
        return yScale(d.value)
      })
      .attr('width', xScale.bandwidth())
      .attr('height', function (d: any) {
        return dimensions.height - yScale(d.value)
      })
  }, [])

  return (
    <S.Container>
      <svg
        ref={d3Chart}
        width={dimensions.width + dimensions.margin}
        height={dimensions.height + dimensions.margin}
      ></svg>
    </S.Container>
  )
}
