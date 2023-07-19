import { AuthProvider } from './'

import React, { ReactNode } from 'react'

interface ProvidersProps {
    children: ReactNode
}

export const Providers: React.FC<ProvidersProps> = ({ children }: ProvidersProps) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export * from './AuthProvider'