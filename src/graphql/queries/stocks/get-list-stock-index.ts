import { gql, QueryHookOptions, useQuery } from '@apollo/client'

export const QUERY_GET_STOCK_INDEX_VARIATION = gql`
  query ($code: String!) {
    getListStockMarketIndexVariation(code: $code) {
      error {
        type
      }
      result {
        value
        min
        max
        volume
        created_at
      }
    }
  }
`

type Response = {
  error?: {
    type: string
  }
  result?: any
}

interface UserData {
  me: Response
}

export function useQueryGetStockIndexVariation(options?: QueryHookOptions) {
  return useQuery<UserData>(QUERY_GET_STOCK_INDEX_VARIATION, options)
}
