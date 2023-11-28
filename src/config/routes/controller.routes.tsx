import { useAuth } from '@contexts'
import { AuthStack } from './auth.routes'
import { UserStack } from './user.routes'

import React from 'react'

export const Routes = () => {
  const { currentUser, accessToken, isLoading } = useAuth()

  if (isLoading) {
    return null
  }

  console.log(currentUser)
  
  return (
    currentUser && accessToken
      ? <UserStack currentUser={currentUser} accessToken={accessToken}/> 
      : <AuthStack/>
  )
} 