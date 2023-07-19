import React from 'react'
import { useAuth } from '../../app/contexts'
import { UserStack, AuthStack } from '.'

export const Routes = () => {
  const { currentUser } = useAuth()


  return (
    currentUser 
      ? <UserStack/> 
      : <AuthStack/>
  )
} 