import { StocksProtocol } from 'interfaces/stocks-protocol'

const makeFakeData = (): StocksProtocol => ({
  code: 'IBOV11.SA',
  history: [
    {
      value: 81000,
      max: 120000,
      min: 90000,
      created_at: new Date(2021, 11, 1)
    },
    {
      value: 90000,
      max: 120000,
      min: 90000,
      created_at: new Date(2022, 0, 1)
    },
    {
      value: 100000,
      max: 120000,
      min: 90000,
      created_at: new Date(2022, 1, 1)
    },
    {
      value: 105000,
      max: 120000,
      min: 90000,
      created_at: new Date(2022, 2, 1)
    }
  ]
})

export const data = makeFakeData()
