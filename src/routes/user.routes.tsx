import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { EvaluationsScreen, ClientsScreen, ProfileScreen } from '../app/screens'

const Stack = createNativeStackNavigator()

export const UserStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName='Avaliações'
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name='Avaliações' component={EvaluationsScreen}/>
                <Stack.Screen name='Clientes' component={ClientsScreen}/>
                <Stack.Screen name='Perfil' component={ProfileScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

