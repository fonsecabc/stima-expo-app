import { auth } from '../../main/config'
import { useEffect, useState } from 'react'

export const useAuth = () => {
    const [initializing, setInitializing] = useState(true)
    const [user, setUser] = useState<any>()
  
    useEffect(() => {
        const subscriber = auth.onAuthStateChanged((user) => {
            setUser(user)
            if (initializing) {
                setInitializing(false)
            }
        })
  
        return () => subscriber()
    })
  
    return user
}
  