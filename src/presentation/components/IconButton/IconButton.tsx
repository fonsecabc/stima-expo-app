import React from 'react'
import { styleSheet } from './StylesSheet'
import { TouchableOpacity } from 'react-native'

interface IconButtonProps {
    action: any
    icon: any
}

export const IconButton = (props: IconButtonProps) => {
    return (
        <TouchableOpacity style={[styleSheet.container]} onPress={props.action}>
            <props.icon style={styleSheet.icon} size={30} />
        </TouchableOpacity>
    )
}

