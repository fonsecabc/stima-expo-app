import { User } from '../../types/entities'
import { auth } from '../../config/firebase'
import { treatError } from '../../modules/_helpers'
import * as storage from '../../modules/_helpers/storageHelper'

import { ReactNode, createContext, useState, useContext  } from 'react'
import { signInWithEmailAndPassword, signOut, sendPasswordResetEmail, onAuthStateChanged } from 'firebase/auth'

type AuthProviderProps = { children: ReactNode }

type ResetPasswordProps = { email: string }

type LoginProps = {
  email: string
  password: string
}

type AuthContextProps = {
  currentUser: User | undefined
  accessToken: () => Promise<string>
  login: (params: LoginProps) => Promise<void | Error>
  logout: () => Promise<void | Error>
  resetPassword: (params: ResetPasswordProps) => Promise<void | Error>
}

const initAuthContextPropsState = {
  currentUser: undefined,
  accessToken: async () => '',
  login: async () => {},
  logout: async () => {},
  resetPassword: async () => {}
}

export const AuthContext = createContext<AuthContextProps>(initAuthContextPropsState)

export const useAuth = () => useContext(AuthContext)

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<any>()

  onAuthStateChanged(auth, (user) => user && setCurrentUser(user))

  const accessToken = async () => await auth.currentUser?.getIdToken(true) ?? ''

  const login = async ({ email, password }: LoginProps): Promise<void | Error> => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      setCurrentUser(auth.currentUser)
      await storage.store({ key: 'currentUser', value: auth.currentUser })
    } catch (err: any) {
      return treatError(err)
    }
  }

  const logout = async (): Promise<void | Error> => {
    await signOut(auth)
      .then(() => setCurrentUser(undefined))
      .catch(treatError)
  }

  const resetPassword = async ({ email }: ResetPasswordProps): Promise<void | Error> => {
    return await sendPasswordResetEmail(auth, email).catch(treatError)
  }

  const value = { currentUser, accessToken, login, logout, resetPassword }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}