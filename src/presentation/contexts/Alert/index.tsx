import { Colors } from '../../styles'
import { Alert, Text } from './styles'

import React, { ReactNode, createContext, useEffect, useState } from 'react'
import { ExclamationTriangleIcon, CheckCircleIcon } from 'react-native-heroicons/solid'

export const AlertContext = createContext<{
  pushNewAlert: (message: string, type: types) => void
      }>({
          pushNewAlert: () => {},
      })

export type types = 'success' | 'error'

export interface AlertProviderProps {
    children: ReactNode
}

export const AlertProvider: React.FC<{ children: ReactNode }> = ({ children }: AlertProviderProps) => {
    const [alerts, setAlerts] = useState<{ message: string, type: types }>()

    const pushNewAlert = (message: string, type: types) => {
        setAlerts(undefined)
        setAlerts({ message, type })
    }

    useEffect(() => {
        if (alerts) {
            const timeout = setTimeout(() => {
                setAlerts(undefined)
            }, 5000)
            return () => clearTimeout(timeout)
        }
    }, [alerts])

    return (
        <AlertContext.Provider value={{ pushNewAlert }}>
            {children}
            {alerts && (
                <Alert 
                    onPress={() => setAlerts(undefined)}
                    type={alerts.type}
                >
                    {alerts.type === 'success' 
                        ? <CheckCircleIcon color={Colors.green} size={30}/>
                        : <ExclamationTriangleIcon color={Colors.red} size={30}/>
                    }
                    <Text>{alerts.message}</Text>
                </Alert>
            )}
        </AlertContext.Provider>
    )
}
