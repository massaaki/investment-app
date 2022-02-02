import { useEffect, useContext, useState } from 'react'
import { useMutation } from '@apollo/client'
import { setCookie, parseCookies } from 'nookies'

import { MUTATION_REFRESH_TOKEN } from 'graphql/mutations/session/refresh-token'

import { MUTATION_CREATE_STOCK_MARKET_INDEX_VARIATION } from 'graphql/mutations/admin/stock-market-index-daily-variation/request-market-index-daily-variation-update'

import { useQueryMe } from 'graphql/queries/users/me'
import { AuthContext } from 'contexts/AuthContext'

import { SingletonApolloClient } from 'utils/apollo'

import * as S from './styles'
import { Button } from 'components/single/Button'

type ResponseRefreshToken = {
  renewRefreshToken: {
    id: string
    token: string
    refreshToken: string
  }
}

export const ProfileTemplate = () => {
  const { signOut, user } = useContext(AuthContext)
  const { data } = useQueryMe()
  const [renewRefreshToken] = useMutation(MUTATION_REFRESH_TOKEN)
  const [createStockMarketIndexDailyVariation] = useMutation(
    MUTATION_CREATE_STOCK_MARKET_INDEX_VARIATION
  )
  const [isLoading, setIsloading] = useState(false)

  async function RenewExpiredToken() {
    const { 'bullbeardev.refreshToken': refreshToken } = parseCookies()

    const { data: dataRefresh } = await renewRefreshToken({
      variables: {
        refreshToken
      }
    })

    const result = dataRefresh as ResponseRefreshToken

    setCookie(undefined, 'bullbeardev.token', result.renewRefreshToken.token, {
      maxAge: 60 * 60 * 24 * 30, //30 days
      path: '/' //paths that will have this cookie information
    })
    setCookie(
      undefined,
      'bullbeardev.refreshToken',
      result.renewRefreshToken.refreshToken,
      {
        maxAge: 60 * 60 * 24 * 30, //30 days
        path: '/' //paths that will have this cookie information
      }
    )

    // console.log(result)
    // console.log(data.sayHello)
  }

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

  useEffect(() => {
    console.log('constructor')
    if (data) {
      if (data.me.error) {
        if (data.me.error.type === 'jwt expired') {
          console.log('refreshing token')
          RenewExpiredToken()
          SingletonApolloClient.renewAuthorization()
        }
      }

      console.log('response', data)
    }
  }, [data])
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
