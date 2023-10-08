import { auth } from '@config'
import { User } from '@entities'
import * as storage from '@helpers'
import { loginUser } from '@requests'
import { treatError } from '@helpers'

import { ReactNode, createContext, useState, useContext, useEffect  } from 'react'

type AuthProviderProps = { children: ReactNode }

type LoginProps = {
  email: string
  password: string
}

type AuthContextProps = {
  currentUser: User | undefined
  accessToken: string | undefined
  isLoading: boolean
  login: (params: LoginProps) => Promise<void | Error>
  logout: () => Promise<void | Error>
}

const initAuthContextPropsState = {
  currentUser: undefined,
  accessToken: undefined,
  isLoading: true,
  login: async () => {},
  logout: async () => {}
}

export const AuthContext = createContext<AuthContextProps>(initAuthContextPropsState)

export const useAuth = () => useContext(AuthContext)

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | undefined>()
  const [accessToken, setAccessToken] = useState<string | undefined>()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const getStoredAccessTokenAndUser = async () => {
    const storedCurrentUser = await storage.read({ key: 'currentUser' })
    const storedAccessToken = await storage.read({ key: 'accessToken' })

    return { storedCurrentUser, storedAccessToken }
  }

  useEffect(() => {
    const getStoredData = async () => {
      const { storedCurrentUser, storedAccessToken } = await getStoredAccessTokenAndUser()
      if (storedCurrentUser && storedAccessToken) {
        setCurrentUser(storedCurrentUser)
        setAccessToken(storedAccessToken)
      }
    }

    const storeData = async () => {
      if (currentUser && accessToken) {
        await storage.store({ key: 'accessToken', value: accessToken })
        await storage.store({ key: 'currentUser', value: currentUser })
      }
    }

    Promise.all([getStoredData(), storeData()])
      .then(() => setIsLoading(false))
  }, [])

  const login = async ({ email, password }: LoginProps): Promise<void | Error> => {
    try {
      const user = await loginUser({ email, password })
      if (user instanceof Error) throw user
      if (!user.body) throw new Error('User not found')

      setCurrentUser(user.body.user)
      setAccessToken(user.body.accessToken)
      await storage.store({ key: 'accessToken', value: user.body.accessToken })
      await storage.store({ key: 'currentUser', value: auth.currentUser })
    } catch (err: any) {
      return treatError(err)
    }
  }

  const logout = async (): Promise<void | Error> => {
    setCurrentUser(undefined)
    setAccessToken(undefined)

    await storage.remove({ key: 'currentUser' })
    await storage.remove({ key: 'accessToken' })
  }

  const value = { currentUser, accessToken, isLoading, login, logout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}