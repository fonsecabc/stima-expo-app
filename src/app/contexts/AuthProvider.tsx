import { User } from '../../types/entities'
import { auth } from '../../config/firebase'
import { treatError } from '../../modules/_helpers'
import * as storage from '../../modules/_helpers/storageHelper'

import { ReactNode, createContext, useState, useContext  } from 'react'
import { signInWithEmailAndPassword, signOut, sendPasswordResetEmail, onAuthStateChanged } from 'firebase/auth'

type AuthContextProps = {
    currentUser: User | undefined
    accessToken: () => Promise<string>
    login: (email: string, password: string) => Promise<void | Error>
    logout: () => Promise<void | Error>
    resetPassword: (email: string) => Promise<void | Error>
}

type AuthProviderProps = {
    children: ReactNode
}

const initAuthContextPropsState = {
  currentUser: undefined,
  accessToken: async () => '',
  login: async () => {},
  logout: async () => {},
  resetPassword: async () => {}
}

export const AuthContext = createContext<AuthContextProps>(initAuthContextPropsState)

export const useAuth = () => {
  return useContext(AuthContext)
} 

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<any>()

  onAuthStateChanged(auth, (user) => user && setCurrentUser(user))

  const accessToken = async () => await auth.currentUser?.getIdToken(true) ?? ''

  const login = async (email: string, password: string): Promise<void | Error> => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      setCurrentUser(auth.currentUser)
      await storage.store({ key: 'currentUser', value: auth.currentUser })
    } catch (err: any) {
      return treatError(err)
    }
  }

  const logout = async (): Promise<void | Error> => {
    try {
      await signOut(auth)
      return setCurrentUser(undefined)
    } catch (err: any) {
      return treatError(err)
    }
  }

  const resetPassword = async (email: string): Promise<void | Error> => {
    try {
      return await sendPasswordResetEmail(auth, email)
    } catch (err: any) {
      return treatError(err)
    }
  }

  return (
    <AuthContext.Provider value={{ currentUser, accessToken, login, logout, resetPassword }}>
      {children}
    </AuthContext.Provider>
  )
}