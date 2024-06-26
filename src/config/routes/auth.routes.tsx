import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginScreen, SignupScreen, ResetPasswordScreen } from '@screens'

const Stack = createNativeStackNavigator()

export const AuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Login'
        screenOptions={{ headerShown: false, title: 'Stima' }}
      >
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Signup' component={SignupScreen}/>
        <Stack.Screen name='ResetPassword' component={ResetPasswordScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

