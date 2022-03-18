export interface Stock {
  value: number
  min: number
  max: number
  created_at: Date
}

export interface StocksProtocol {
  code: string
  history: Stock[]
}
