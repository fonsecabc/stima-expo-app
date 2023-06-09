import React, { ReactNode } from 'react'
import { View } from 'react-native'
import { styleSheet } from './StyleSheet'

interface ScreenProps {
    background: 'gray' | 'gradient'
    children: ReactNode
}

export const Screen = (props: ScreenProps) => {
    return (
        <View 
            style={[
                styleSheet.screen,
                props.background === 'gray' ? styleSheet.backgroundGray : styleSheet.backgroundBlue
            ]}
        >
            {props.children}
        </View>
    )
}