import React from 'react'
import { styleSheet } from './StylesSheet'
import { Text, View } from 'react-native'
import { ExclamationTriangleIcon, CheckCircleIcon  } from 'react-native-heroicons/solid'
import { Colors } from '../../styles'

interface NotificationProps {
    text: string
    type: 'error' | 'success' | 'normal'
}

export const Notification = (props: NotificationProps) => {
    
    return (
        <View
            style={[
                styleSheet.container,
                { backgroundColor: props.type === 'error' ? Colors.lightRed : Colors.lightGreen }
            ]}
        >
            {props.type === 'error' 
                ? <ExclamationTriangleIcon style={styleSheet.iconRed}size={30} /> 
                : <CheckCircleIcon style={styleSheet.iconGreen}size={30} />}
            <Text style={[
                styleSheet.text,
                { color: props.type === 'error' ? Colors.red : Colors.green }
            ]}
            >
                {props.text}
            </Text>
        </View>
    )
}