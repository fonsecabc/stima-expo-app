import React from 'react'
import { styleSheet } from './StylesSheet'
import { Text, View, TouchableOpacity } from 'react-native'
import { BellIcon } from 'react-native-heroicons/outline'

interface HeaderTitleProps {
    navigation: any
    title: string
}

export const HeaderTitle = (props: HeaderTitleProps) => {
    const handlePress = {
        notifications: () => {
            props.navigation.navigate('Notifications')
        }
    }

    return (
        <View style={[styleSheet.container]}>
            <Text style={styleSheet.title}>{props.title}</Text>
            <TouchableOpacity style={styleSheet.icon} onPress={handlePress.notifications}>
                <BellIcon size={30}/>
            </TouchableOpacity>
        </View>
    )
}

