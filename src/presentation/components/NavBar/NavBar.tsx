import React from 'react'
import { styleSheet } from './StylesSheet'
import { View, TouchableOpacity, Text } from 'react-native'
import { ClipboardDocumentListIcon, UserGroupIcon, UserCircleIcon } from 'react-native-heroicons/outline'
import * as solid from 'react-native-heroicons/solid'

interface NavBarProps {
    navigation: any
    activeScreen: 1 | 2 | 3
}

export const NavBar = (props: NavBarProps) => {
    const handlePress = {
        evaluations: () => {
            props.navigation.navigate('Avaliações')
        },
        clients: () => {
            props.navigation.navigate('Clientes')
        },
        profile: () => {
            props.navigation.navigate('Perfil')
        }
    }

    return (
        <View style={[styleSheet.container]}>
            <TouchableOpacity 
                style={props.activeScreen === 1 ? styleSheet.activeIcon : styleSheet.icon}
                onPress={handlePress.evaluations}
            >
                {props.activeScreen === 1 ? <solid.ClipboardDocumentListIcon size={30}/> : <ClipboardDocumentListIcon size={30}/>}
                <Text style={props.activeScreen === 1 ? styleSheet.activeIcon : styleSheet.icon}>Avaliações</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={props.activeScreen === 2 ? styleSheet.activeIcon : styleSheet.icon}
                onPress={handlePress.clients}
            >
                {props.activeScreen === 2 ? <solid.UserGroupIcon size={30}/> : <UserGroupIcon size={30}/>}
                <Text style={props.activeScreen === 2 ? styleSheet.activeIcon : styleSheet.icon}>Clientes</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={props.activeScreen === 3 ? styleSheet.activeIcon : styleSheet.icon}
                onPress={handlePress.profile}
            >
                {props.activeScreen === 3 ? <solid.UserCircleIcon size={30}/> : <UserCircleIcon size={30}/>}
                <Text style={props.activeScreen === 3 ? styleSheet.activeIcon : styleSheet.icon}>Perfil</Text>
            </TouchableOpacity>
        </View>
    )
}