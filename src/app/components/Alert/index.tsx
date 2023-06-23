import { Colors } from '../../styles'
import { Alerts, Text } from './styles'
import { TouchableOpacity } from 'react-native'

import React from 'react'
import { ExclamationTriangleIcon, CheckCircleIcon } from 'react-native-heroicons/solid'

interface AlertProps {
    message: string
    type: 'success' | 'error'
    handlePress: any
}

export const Alert = ({ message, type, handlePress }: AlertProps) => {
    return (
        <TouchableOpacity 
            onPress={() => handlePress}
        >
            <Alerts 
                type={type}
            >
                {type === 'success' 
                    ? <CheckCircleIcon color={Colors.green} size={30}/>
                    : <ExclamationTriangleIcon color={Colors.red} size={30}/>
                }
                <Text>{message}</Text>
            </Alerts>
        </TouchableOpacity>
    )
}
