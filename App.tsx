import { setupApp } from './src/config'
import { Colors } from './src/app/styles'
import { Routes } from './src/config/routes'
import { Providers } from './src/app/contexts'

import React from 'react'
import { View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Toast from 'react-native-toast-message'


import { 
  useFonts,
  Outfit_100Thin,
  Outfit_200ExtraLight,
  Outfit_300Light,
  Outfit_400Regular,
  Outfit_500Medium,
  Outfit_600SemiBold,
  Outfit_700Bold,
  Outfit_800ExtraBold,
  Outfit_900Black,
} from '@expo-google-fonts/outfit'
import { SplashScreen } from './src/app/components'

const App = () => {
  const [fontsLoaded] = useFonts({
    Outfit_100Thin,
    Outfit_200ExtraLight,
    Outfit_300Light,
    Outfit_400Regular,
    Outfit_500Medium,
    Outfit_600SemiBold,
    Outfit_700Bold,
    Outfit_800ExtraBold,
    Outfit_900Black,
  })

  const app = setupApp()

  if (!fontsLoaded || !app) {
    return <SplashScreen />
  }

  return (
    <View style={{ flex: 1 }}>
      <Providers>
        <Routes/>
      </Providers>
      <Toast/>
      <StatusBar style='dark' backgroundColor={Colors.slate}/>
    </View>
  )
}

export default App
