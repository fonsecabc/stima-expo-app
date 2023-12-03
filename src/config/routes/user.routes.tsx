import { User } from '@entities'
import * as screens from '@screens'

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

interface UserStackProps {
  accessToken: string
  currentUser: User
}

type ScreenProps = {
  navigation: any
  route: any
}

export const UserStack = (props: UserStackProps) => {
  //const initialRouteName = props.currentUser.createdAt.getTime() < (Date.now() - 7 * 24 * 60 * 60 * 1000) && !props.currentUser.subscription ? 'Subscription Payment' : 'Evaluations'
  const initialRouteName = 'Evaluations'
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{ headerShown: false, title: 'Stima' }}
        initialRouteName={initialRouteName}
      >
        <Stack.Screen name='Evaluations'>
          {(screenProps: ScreenProps) => <screens.EvaluationsScreen {...screenProps} route={{ params: { ...props } }}/>}
        </Stack.Screen>
        <Stack.Screen name='Clients'>
          {(screenProps: ScreenProps) => <screens.ClientsScreen {...screenProps} route={{ params: { ...props } }} />}
        </Stack.Screen>
        <Stack.Screen name='Options'>
          {(screenProps: ScreenProps) => <screens.OptionsScreen {...screenProps} route={{ params: { ...props } }} />}
        </Stack.Screen>
        <Stack.Screen name='Create Evaluation'>
          {(screenProps: ScreenProps) => <screens.CreateEvaluationScreen {...screenProps} route={{ params: { ...props, client: screenProps?.route?.params?.client } }} />}
        </Stack.Screen>
        <Stack.Screen name='Create Client'>
          {(screenProps: ScreenProps) => <screens.CreateClientScreen {...screenProps} route={{ params: { ...props } }} />}
        </Stack.Screen>
        <Stack.Screen name='Client'>
          {(screenProps: ScreenProps) => <screens.ClientScreen {...screenProps} route={{ params: { ...props, clientUid: screenProps?.route?.params?.clientUid } }} />}
        </Stack.Screen>
        <Stack.Screen name='Evaluation'>
          {(screenProps: ScreenProps) => <screens.EvaluationScreen {...screenProps} route={{ params: { ...props, evaluationUid: screenProps?.route?.params?.evaluationUid } }} />}
        </Stack.Screen>
        <Stack.Screen name='Payment'>
          {(screenProps: ScreenProps) => <screens.PaymentScreen {...screenProps} route={{ params: { ...props, order: screenProps?.route?.params?.order } }} />}
        </Stack.Screen>
        <Stack.Screen name='Subscription Payment'>
          {(screenProps: ScreenProps) => <screens.SubscriptionPaymentScreen {...screenProps} route={{ params: { ...props } }} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

