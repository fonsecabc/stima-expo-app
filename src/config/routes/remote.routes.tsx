import * as screens from '@screens'

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

type RemoteStackProps = {
  path: string
}

type ScreenProps = {
  navigation: any
  route: any
}

const remotePages: {[k: string]: string} = {
  '/remote/client': 'Remote Client',
  '/remote/evaluation': 'Remote Evaluation',
  '/remote/create-evaluation': 'Remote Create Evaluation',
}

export const RemoteStack = (props: RemoteStackProps) => {
  const { path } = props
  
  const params = path
    .split('?')
    .slice(1)
    .toLocaleString()
    .split('&')
    .map(param => param.split('='))
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {})

  const initialRouteName = remotePages[path.split('?')[0]]
  if (!initialRouteName) {
    return null
  }

  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{ headerShown: false, title: 'Stima' }}
        initialRouteName={initialRouteName}
      >
        <Stack.Screen name='Remote Create Evaluation'>
          {(screenProps: ScreenProps) => <screens.RemoteCreateEvaluationScreen 
            {...screenProps} 
            route={{ params }} 
          />}
        </Stack.Screen>
        <Stack.Screen name='Remote Client'>
          {(screenProps: ScreenProps) => <screens.RemoteClientScreen 
            {...screenProps} 
            route={{ params }} 
          />}
        </Stack.Screen>
        <Stack.Screen name='Remote Evaluation'>
          {(screenProps: ScreenProps) => <screens.RemoteEvaluationScreen 
            {...screenProps} 
            route={{ params: { ...params, evaluationUid: screenProps?.route?.params?.evaluationUid } }} 
          />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

