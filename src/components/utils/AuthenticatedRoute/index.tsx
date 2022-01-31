import { useEffect, useState, useContext } from 'react'
import { AuthContext } from 'contexts/AuthContext'
import { useRouter } from 'next/router'

const AuthenticatedRoute = ({ children }) => {
  const { user } = useContext(AuthContext)
  const router = useRouter()
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (!user) {
      router.push('/signin')
    }

    setEnabled(true)
  }, [user])

  if (user) {
    if (enabled) return children
    else return <></>
  } else return <></>
}

export default AuthenticatedRoute
