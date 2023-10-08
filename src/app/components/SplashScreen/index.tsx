import { ScreenContainer } from '@components/SplashScreen/styles'

import React from 'react'
import { Image } from 'react-native'

export const SplashScreen = () => {
  return <ScreenContainer>
    <Image source={require('../../public/splash.png')} />
  </ScreenContainer>
}
