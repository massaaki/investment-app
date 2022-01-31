import { useEffect, useContext } from 'react'
import { useMutation } from '@apollo/client'
import { setCookie, parseCookies } from 'nookies'

import { MUTATION_REFRESH_TOKEN } from 'graphql/mutations/session/refresh-token'
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
  const { signOut } = useContext(AuthContext)
  const { data } = useQueryMe()
  const [renewRefreshToken] = useMutation(MUTATION_REFRESH_TOKEN)

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
        <p>Protected</p>
        <Button onClick={handleLogout}>Logout</Button>
      </S.Content>
    </S.Container>
  )
}
