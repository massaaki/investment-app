import { useContext, useState } from 'react'
import { useMutation } from '@apollo/client'

import { MUTATION_CREATE_STOCK_MARKET_INDEX_VARIATION } from 'graphql/mutations/admin/stock-market-index-daily-variation/request-market-index-daily-variation-update'

import { AuthContext } from 'contexts/AuthContext'
import { Button } from 'components/single/Button'

import * as S from './styles'

export const ProfileTemplate = () => {
  const { signOut, user } = useContext(AuthContext)
  const [createStockMarketIndexDailyVariation] = useMutation(
    MUTATION_CREATE_STOCK_MARKET_INDEX_VARIATION
  )
  const [isLoading, setIsloading] = useState(false)

  function handleLogout() {
    signOut()
  }

  async function handleUpdateDailyVariationIndex() {
    setIsloading(true)
    const response = await createStockMarketIndexDailyVariation({
      variables: {
        code: 'IBOV'
      }
    })
    setIsloading(false)
    console.log('response..:', response)
  }

  return (
    <S.Container>
      <S.Content>
        <h1>Profile</h1>
        <p style={{ color: '#fff' }}>Authenticated route</p>

        {user && user.isAdmin && !isLoading && (
          <div style={{ margin: '2rem 0' }}>
            <Button onClick={handleUpdateDailyVariationIndex}>
              Update Market Stock Index
            </Button>
          </div>
        )}

        {user && user.isAdmin && isLoading && (
          <p style={{ color: '#fff' }}>Loading...</p>
        )}
        <Button onClick={handleLogout}>Logout</Button>
      </S.Content>
    </S.Container>
  )
}
