import { useEffect, useState, createContext, ReactNode } from 'react'
import Router from 'next/router'
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import { decode } from 'jsonwebtoken'

import { useMutation } from '@apollo/client'
import { MUTATION_LOGIN } from 'graphql/mutations/session/login'
import { QUERY_ME } from 'graphql/queries/users/me'
import { SingletonApolloClient } from 'utils/apollo'
import { MUTATION_REFRESH_TOKEN } from 'graphql/mutations/session/refresh-token'

type User = {
  id: string
  isAdmin?: boolean
}

type SigninCredentials = {
  email: string
  password: string
}

type AuthContextData = {
  signIn(credentials: SigninCredentials): Promise<void>
  signOut(): void
  user: User
  isAuthenticated: boolean
}

type AuthProviderProps = {
  children: ReactNode
}

type LoginResponse = {
  id: string
  isAdmin?: boolean
  token: string
  refreshToken: string
}

type DecodedCookieType = {
  id: string
  exp: number
}

type ResponseRefreshToken = {
  renewRefreshToken: {
    id: string
    token: string
    refreshToken: string
  }
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>(null)
  const [login] = useMutation(MUTATION_LOGIN)
  const isAuthenticated = !!user
  const [renewRefreshToken] = useMutation(MUTATION_REFRESH_TOKEN)

  async function getUser(id) {
    const client = SingletonApolloClient.getInstance()
    const response = client.query({
      query: QUERY_ME,
      variables: {
        id
      }
    })
    return response
  }

  async function initializeValuesOnStart() {
    //restore cookies
    const { 'bullbeardev.token': token } = parseCookies()

    if (token) {
      const decoded = decode(token) as DecodedCookieType

      const expiresDate = new Date(decoded.exp * 1000)
      const currentDate = new Date()
      const isExpired =
        expiresDate.getTime() - currentDate.getTime() < 0 ? true : false

      console.log('expires date: ', expiresDate)
      console.log('current date:', currentDate)
      console.log('isExpired', isExpired)

      const { data } = await getUser(decoded.id)

      if (!data) {
        signOut()
      }

      if (data.me.error && data.me.error.type === 'jwt expired') {
        console.log('refreshing token')
        renewExpiredToken()
        SingletonApolloClient.renewAuthorization()
      }

      const { id, isAdmin } = data.me.result
      console.log('data.me..:', data.me)
      setUser({
        id,
        isAdmin
      })
    } else {
      signOut()
    }
  }

  async function renewExpiredToken() {
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

  useEffect(() => {
    initializeValuesOnStart()
  }, [])

  async function signIn({ email, password }: SigninCredentials) {
    try {
      const response = await login({
        variables: {
          email: email,
          password: password
        }
      })
      console.log('response', response)

      const { id, token, refreshToken, isAdmin } = response.data
        .login as LoginResponse

      if (!token || !refreshToken) {
        return
      }

      setCookie(undefined, 'bullbeardev.token', token, {
        maxAge: 60 * 60 * 24 * 30, //30 days
        path: '/' //paths that will have this cookie information
      })
      setCookie(undefined, 'bullbeardev.refreshToken', refreshToken, {
        maxAge: 60 * 60 * 24 * 30, //30 days
        path: '/' //paths that will have this cookie information
      })
      if (id) {
        setUser({ id, isAdmin })
      }
      // Router.push('/dashboard')
    } catch (error) {
      console.error('Error(signIn): ', error)
    }
  }

  function signOut() {
    destroyCookie(undefined, 'bullbeardev.token')
    destroyCookie(undefined, 'bullbeardev.refreshToken')
    setUser(null)
    // Router.push('/signin')
  }
  return (
    <AuthContext.Provider value={{ signIn, signOut, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  )
}
