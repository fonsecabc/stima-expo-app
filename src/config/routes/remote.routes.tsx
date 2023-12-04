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

const remotePages: Map<string, string> = new Map([
  ['/remote/create-evaluation', 'Remote Create Evaluation'],
  ['/remote/client', 'Client'],
  ['/remote/evaluation', 'Evaluation']
])

export const RemoteStack = (props: RemoteStackProps) => {
  const { path } = props
  
  const params = path
  .split('?')
  .slice(1)
  .toLocaleString()
  .split('&')
  .map(param => param.split('='))
  .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {})

  const initialRouteName = remotePages.get(path.split('?')[0])
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
        <Stack.Screen name='Client'>
          {(screenProps: ScreenProps) => <screens.ClientScreen 
          {...screenProps} 
          route={{ params: { ...params, clientUid: screenProps?.route?.params?.clientUid } }} 
        />}
        </Stack.Screen>
        <Stack.Screen name='Evaluation'>
          {(screenProps: ScreenProps) => <screens.EvaluationScreen 
          {...screenProps} 
          route={{ params: { ...params, evaluationUid: screenProps?.route?.params?.evaluationUid } }} 
        />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

