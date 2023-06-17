import { Fonts } from '../styles'

import { Text, View } from 'react-native'
import React, { ReactNode, createContext, useState } from 'react'

export const AlertContext = createContext<{
  pushNewAlert: (message: string, type: types) => void
      }>({
          pushNewAlert: () => {},
      })

export type types = 'success' | 'info' | 'warning' | 'error' | undefined

export interface AlertProviderProps {
    children: ReactNode
}

export const AlertProvider: React.FC<{ children: ReactNode }> = ({ children }: AlertProviderProps) => {
    const [alerts, setAlerts] = useState<{ message: string, type: types }>()

    const pushNewAlert = (message: string, type: types) => {
        setAlerts(undefined)
        setAlerts({ message, type })
    }

    return (
        <AlertContext.Provider value={{ pushNewAlert }}>
            {children}
            {alerts && (
                <View
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        margin: 20,
                        alignItems: 'center',
                        alignContent: 'center',
                        fontSize: Fonts.lg,
                    }}
                    key={Math.random().toString()}
                    showIcon={true}
                    message={<Text>{alerts.message}</Text>}
                    type={alerts.type}
                    closable={true}
                    onClose={() => {
                        setAlerts(undefined)
                    }}
                />
            )}
        </AlertContext.Provider>
    )
}
