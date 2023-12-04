import { useAuth } from '@contexts'
import { AuthStack } from './auth.routes'
import { UserStack } from './user.routes'
import { RemoteStack } from './remote.routes'

import React from 'react'
import { Platform } from 'react-native'

export const Routes = () => {
  const { currentUser, accessToken, isLoading } = useAuth()

  if (isLoading) return null

  if (Platform.OS === 'web') {
    const origin = window.location.origin
    const webPath = window.location.href.replace(origin, '')
    const initialPath = webPath.split('/')[1]
  
    if (initialPath === 'remote') return <RemoteStack path={webPath}/>
  }


  return (
    currentUser && accessToken
      ? <UserStack currentUser={currentUser} accessToken={accessToken}/> 
      : <AuthStack/>
  )
} 