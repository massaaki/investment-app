import { useMutation } from '@apollo/client'
import { MUTATION_REFRESH_TOKEN } from 'graphql/mutations/session/refresh-token'
import { useQueryUsers } from 'graphql/queries/users/load-users'
import { setCookie, parseCookies } from 'nookies'
import { useEffect } from 'react'
import { SingletonApolloClient } from 'utils/apollo'

import * as S from './styles'

// type ResponseRefreshToken = {
//   renewRefreshToken: {
//     id: string
//     token: string
//     refreshToken: string
//   }
// }

export const DashboardTemplate = () => {
  // const { data } = useQueryUsers()
  // const [renewRefreshToken] = useMutation(MUTATION_REFRESH_TOKEN)

  // async function RenewExpiredToken() {
  //   const { 'bullbeardev.refreshToken': refreshToken } = parseCookies()

  //   const { data: dataRefresh } = await renewRefreshToken({
  //     variables: {
  //       refreshToken
  //     }
  //   })

  //   const result = dataRefresh as ResponseRefreshToken

  //   setCookie(undefined, 'bullbeardev.token', result.renewRefreshToken.token, {
  //     maxAge: 60 * 60 * 24 * 30, //30 days
  //     path: '/' //paths that will have this cookie information
  //   })
  //   setCookie(
  //     undefined,
  //     'bullbeardev.refreshToken',
  //     result.renewRefreshToken.refreshToken,
  //     {
  //       maxAge: 60 * 60 * 24 * 30, //30 days
  //       path: '/' //paths that will have this cookie information
  //     }
  //   )
  // }

  // useEffect(() => {
  //   if (data) {
  //     if (data.sayHello.error) {
  //       if (data.sayHello.error.type === 'jwt expired') {
  //         console.log('refreshing token')
  //         RenewExpiredToken()
  //         SingletonApolloClient.renewAuthorization()
  //       }
  //     }

  //     console.log('response', data)
  //   }
  // }, [data])
  return (
    <S.Container>
      <S.Content>
        <h1>Dashboard</h1>
        <p>hello dash!</p>
      </S.Content>
    </S.Container>
  )
}
