import { User } from '../../types/entities'

import { ReactNode, SetStateAction, Dispatch, createContext, useState, useContext,  } from 'react'

type AuthContextProps = {
    currentUser: User | undefined
    setCurrentUser: Dispatch<SetStateAction<User | undefined>>
    logout: () => void
}

type AuthProviderProps = {
    children: ReactNode
}

const initAuthContextPropsState = {
    currentUser: undefined,
    setCurrentUser: () => {},
    logout: () => {}
}

export const AuthContext = createContext<AuthContextProps>(initAuthContextPropsState)

export const useAuth = () => {
    return useContext(AuthContext)
} 

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }: AuthProviderProps) => {
    const [currentUser, setCurrentUser] = useState<User>()

    const logout = () => {
        setCurrentUser(undefined)
    } 

    return (
        <AuthContext.Provider value={{ currentUser, setCurrentUser, logout }}>
            {children}
        </AuthContext.Provider>
    )

}