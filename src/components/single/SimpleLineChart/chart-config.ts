import { ChartConfiguration } from 'chart.js'

type makeChartConfigProps = {
  label: string
  xLabels: unknown[]
  values: number[]
}

const makeChartConfig = ({
  label,
  xLabels,
  values
}: makeChartConfigProps): ChartConfiguration => ({
  type: 'line',
  data: {
    labels: xLabels,
    datasets: [
      {
        label: label,
        data: values,
        backgroundColor: ['#7481e7'],
        borderColor: '#fff',
        borderWidth: 0.4
      }
    ]
  },
  options: {
    scales: {
      x: {
        grid: {
          tickColor: '#555',
          borderColor: '#888'
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          tickColor: '#555',
          borderColor: '#888'
        }
      }
    }
  }
})

export { makeChartConfig }
