import { QUERY_GET_STOCK_INDEX_VARIATION } from 'graphql/queries/stocks/get-list-stock-index'
import { GetStaticProps } from 'next'
import { DashboardTemplate } from 'templates/Dashboard'
import { SingletonApolloClient } from 'utils/apollo'

export default function DashboardPage() {
  return <DashboardTemplate />
}

export const getStaticProps: GetStaticProps = async (context) => {
  const client = SingletonApolloClient.getInstance()

  const { data } = await client.query({
    query: QUERY_GET_STOCK_INDEX_VARIATION,
    variables: {
      code: 'IBOV11.SA'
    }
  })

  console.log('data..:', data.getListStockMarketIndexVariation.result)

  return {
    props: {},
    revalidate: 60 * 12
  }
}
