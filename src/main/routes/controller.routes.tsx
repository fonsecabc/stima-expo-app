import React from 'react'
import { useAuth } from '../../application/hooks'
import { UserStack, AuthStack } from './'

export const Routes = () => {
    const user = useAuth()

    return (
        user 
            ? <UserStack/> 
            : <AuthStack/>
    )
} 