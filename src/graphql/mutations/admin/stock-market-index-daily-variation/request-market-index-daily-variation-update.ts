import { gql } from '@apollo/client'

export const MUTATION_CREATE_STOCK_MARKET_INDEX_VARIATION = gql`
  mutation ($code: String!) {
    createStockMarketIndexDailyVariation(code: $code) {
      error {
        type
      }
      result {
        code
        value
      }
    }
  }
`
