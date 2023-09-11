import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as screens from '../../app/screens'

const Stack = createNativeStackNavigator()

export const UserStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{ headerShown: false, title: 'Stima' }}
      >
        <Stack.Screen name='Evaluations' component={screens.EvaluationsScreen}/>
        <Stack.Screen name='Clients' component={screens.ClientsScreen}/>
        <Stack.Screen name='Profile' component={screens.ProfileScreen}/>
        <Stack.Screen name='Create Evaluation' component={screens.CreateEvaluationScreen}/>
        <Stack.Screen name='Create Client' component={screens.CreateClientScreen}/>
        <Stack.Screen name='Client' component={screens.ClientScreen}/>
        <Stack.Screen name='Evaluation' component={screens.EvaluationScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

