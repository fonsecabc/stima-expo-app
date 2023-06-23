import { Alert } from '../components'

import { FC, ReactNode, createContext, useContext, useEffect, useState } from 'react'

type Alert = {
    message: string
    type: 'success' | 'error'
}

type AlertContextProps = {
    pushNewAlert: (alert: Alert) => void
}

type AlertProviderProps = {
    children: ReactNode
}

const initAlertContextPropsState = {
    pushNewAlert: () => {}
}

export const AlertContext = createContext<AlertContextProps>(initAlertContextPropsState)

export const useAlerts = () => {
    return useContext(AlertContext)
} 

export const AlertProvider: FC<AlertProviderProps> = ({ children }: AlertProviderProps) => {
    const [alert, setAlert] = useState<Alert>()

    const pushNewAlert = ({ message, type }: Alert) => {
        setAlert(undefined)
        setAlert({ message, type })
    }

    useEffect(() => {
        if (alert) {
            const timeout = setTimeout(() => {
                setAlert(undefined)
            }, 5000)
            clearTimeout(timeout)
        }
    }, [alert])

    return (
        <AlertContext.Provider value={{ pushNewAlert }}>
            {children}
            {alert && (
                <Alert message={alert.message} type={alert.type} handlePress={() => setAlert(undefined)}/>
            )}
        </AlertContext.Provider>
    )
}
