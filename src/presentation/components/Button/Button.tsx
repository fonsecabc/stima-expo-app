import React from 'react'
import { styleSheet } from './StylesSheet'
import { Text, View, TouchableOpacity, StyleProp } from 'react-native'

interface ButtonProps {
    action: any
    text: string
    icon?: any
    style?: StyleProp<any>
    isDisabled: boolean
}

export const Button = (props: ButtonProps) => {
    return (
        <TouchableOpacity 
            style={[styleSheet.container, props.style]} 
            onPress={props.action}
            disabled={!!props.isDisabled}
        >
            <Text style={props.icon ? styleSheet.textLeft : styleSheet.textCentered}>{props.text}</Text>
            {props.icon && (
                <View style={styleSheet.icon}>
                    <props.icon size={30}/>
                </View>
            )}
        </TouchableOpacity>
    )
}

