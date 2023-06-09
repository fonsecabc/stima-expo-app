import React from 'react'
import { Image, View } from 'react-native'
import { styleSheet } from './StylesSheet'

export const Logo = () => {
    return (
        <View>
            <Image style={styleSheet.logo} source={require('../../public/logo.png')} />
        </View>
    )
}

