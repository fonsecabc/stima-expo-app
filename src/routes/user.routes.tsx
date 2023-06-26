import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { EvaluationsScreen, ClientsScreen, ProfileScreen } from '../app/screens'

const Stack = createNativeStackNavigator()

export const UserStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName='Evaluations'
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name='Evaluations' component={EvaluationsScreen}/>
                <Stack.Screen name='Clients' component={ClientsScreen}/>
                <Stack.Screen name='Profile' component={ProfileScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

