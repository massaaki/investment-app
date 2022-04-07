import { QUERY_GET_STOCK_INDEX_VARIATION } from 'graphql/queries/stocks/get-list-stock-index'
import { GetStaticProps } from 'next'
import { DashboardTemplate } from 'templates/Dashboard'
import { SingletonApolloClient } from 'utils/apollo'

import { StocksProtocol } from 'interfaces/stocks-protocol'

export type DashboardPageProps = {
  stockIndexesHistory: StocksProtocol[]
}

export default function DashboardPage({
  stockIndexesHistory
}: DashboardPageProps) {
  if (!stockIndexesHistory) return <></>
  return <DashboardTemplate stockIndexesHistory={stockIndexesHistory} />
}

export const getStaticProps: GetStaticProps = async () => {
  const client = SingletonApolloClient.getInstance()

  const { data } = await client.query({
    query: QUERY_GET_STOCK_INDEX_VARIATION,
    variables: {
      code: 'IBOV11.SA'
    }
  })

  const stockIndexesHistory: StocksProtocol[] = [
    {
      code: 'IBOV11.SA',
      history: data.getListStockMarketIndexVariation.result.map((stock) => ({
        value: stock.value,
        min: stock.min,
        max: stock.max,
        created_at: Number(stock.created_at)
      }))
    }
  ]

  return {
    props: { stockIndexesHistory },
    revalidate: 60 * 12
  }
}
