import { AuthProvider, AlertProvider } from './'

import React, { ReactNode } from 'react'

interface ProvidersProps {
    children: ReactNode
}

export const Providers: React.FC<ProvidersProps> = ({ children }: ProvidersProps) => {
    return (
        <AuthProvider>
            <AlertProvider>
                {children}
            </AlertProvider>
        </AuthProvider>
    )
}

export * from './AuthProvider'
export * from './AlertProvider'