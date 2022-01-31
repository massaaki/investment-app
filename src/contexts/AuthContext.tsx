import { useEffect, useState, createContext, ReactNode } from 'react'
import Router from 'next/router'
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import { decode } from 'jsonwebtoken'

import { useMutation } from '@apollo/client'
import { MUTATION_LOGIN } from 'graphql/mutations/session/login'

type User = {
  id: string
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
  token: string
  refreshToken: string
}

type DecodedCookieType = {
  id: string
  exp: number
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>(null)
  const [login] = useMutation(MUTATION_LOGIN)
  const isAuthenticated = !!user

  useEffect(() => {
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

      // TODO: try refresh token

      setUser({
        id: decoded.id
      })
      Router.push('/dashboard')
    } else {
      // signOut()
    }
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

      const { id, token, refreshToken } = response.data.login as LoginResponse

      setCookie(undefined, 'bullbeardev.token', token, {
        maxAge: 60 * 60 * 24 * 30, //30 days
        path: '/' //paths that will have this cookie information
      })
      setCookie(undefined, 'bullbeardev.refreshToken', refreshToken, {
        maxAge: 60 * 60 * 24 * 30, //30 days
        path: '/' //paths that will have this cookie information
      })

      setUser({ id })
      Router.push('/dashboard')
    } catch (error) {
      console.error('Error(signIn): ', error)
    }
  }

  function signOut() {
    destroyCookie(undefined, 'bullbeardev.token')
    destroyCookie(undefined, 'bullbeardev.refreshToken')
    setUser(null)
    Router.push('/signin')
  }
  return (
    <AuthContext.Provider value={{ signIn, signOut, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  )
}
